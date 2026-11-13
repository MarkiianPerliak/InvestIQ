import style from './Registration.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { loginSchema, registrationSchema } from '../../../schema/loginschema';
import Header from '../../Header/Header';
import Container from '../../Container/Container';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebase';
type FormValues = {
  email: string;
  password: string;
};

export default function Registration() {
  const [isRegistration, setIsRegistration] = useState(false);
  const [serverError, setServerError] = useState("")
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(isRegistration ? registrationSchema : loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) =>  {
    setServerError("")
    try {
      if (isRegistration) {
        await createUserWithEmailAndPassword(auth, data.email, data.password)
      } else {
        await signInWithEmailAndPassword(auth, data.email, data.password)
      }
    } catch (error) {
      console.log(error)
      setServerError("Put in real data")
    }
  };
  return (
    <>
      <Header showUser={false} />
      <main className={`page ${style.registration}`}>
        <Container>
          <div className={style.registration__content}>
            <div className={style.registration__left}>
              <h1 className={style.registration__headline}>InvestIQ</h1>
              <p className={style.registration__brandline}>SMART FINANCE</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className={style.registration__form}>
              <p className={style.registration__text}>
                Ви можете авторизуватися за допомогою акаунта Google
              </p>
              <button className={style.registration__google} type="button">
                <span className={style.registration__google_mark} aria-hidden="true">
                  G
                </span>
                Google
              </button>
              <p className={style.registration__text}>
                {isRegistration
                  ? 'Або зареєструватися за допомогою ел. пошти та паролю'
                  : 'Або увійти за допомогою ел. пошти та паролю після реєстрації'}
              </p>

              <label className={style.registration__emaill} htmlFor="registration-email">
                Електронна пошта:
              </label>
              <input
                id="registration-email"
                type="email"
                placeholder="your@email.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'registration-email-error' : undefined}
                {...register('email')}
                className={style.registration__email}
              />
              {errors.email && (
                <p id="registration-email-error" className={style.registration__error} role="alert">
                  {errors.email.message}
                </p>
              )}

              <label className={style.registration__passwordl} htmlFor="registration-password">
                Пароль:
              </label>
              <input
                id="registration-password"
                type="password"
                aria-invalid={Boolean(errors.password)}
                aria-describedby={errors.password ? 'registration-password-error' : undefined}
                {...register('password')}
                className={style.registration__password}
              />
              {errors.password && (
                <p id="registration-password-error" className={style.registration__error} role="alert">
                  {errors.password.message}
                </p>
              )}

              <div className={style.registration__actions}>
                <button
                  type={isRegistration ? 'button' : 'submit'}
                  className={style.registration__login}
                  aria-pressed={!isRegistration}
                  data-active={String(!isRegistration)}
                  onClick={() => {
                    if (isRegistration) {
                      clearErrors();
                      setIsRegistration(false);
                    }
                  }}
                >
                  УВІЙТИ
                </button>
                <button
                  type={isRegistration ? 'submit' : 'button'}
                  className={style.registration__signup}
                  aria-pressed={isRegistration}
                  data-active={String(isRegistration)}
                  onClick={() => {
                    if (!isRegistration) {
                      clearErrors();
                      setIsRegistration(true);
                    }
                  }}
                >
                  РЕЄСТРАЦІЯ
                </button>
              </div>
            </form>
          </div>
        </Container>
      </main>
    </>
  );
}