import style from './Registration.module.css';
import { useForm, type SubmitHandler } from 'react-hook-form';
import Header from '../../Header/Header';
import Container from '../../Container/Container';

type FormValues = {
  email: string;
  password: string;
};

export default function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { email: '', password: '' },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
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
                Або увійти за допомогою ел. пошти та паролю після реєстрації
              </p>

              <label className={style.registration__emaill} htmlFor="registration-email">
                Електронна пошта:
              </label>
              <input
                id="registration-email"
                type="email"
                placeholder="your@email.com"
                aria-invalid={errors.email ? 'true' : 'false'}
                {...register('email', { required: 'Email is required' })}
                className={style.registration__email}
              />
              {errors.email && (
                <p className={style.registration__error} role="alert">
                  {errors.email.message}
                </p>
              )}

              <label className={style.registration__passwordl} htmlFor="registration-password">
                Пароль:
              </label>
              <input
                id="registration-password"
                type="password"
                aria-invalid={errors.password ? 'true' : 'false'}
                {...register('password', { required: 'Password is required' })}
                className={style.registration__password}
              />
              {errors.password && (
                <p className={style.registration__error} role="alert">
                  {errors.password.message}
                </p>
              )}

              <div className={style.registration__actions}>
                <button type="submit" className={style.registration__login}>
                  УВІЙТИ
                </button>
                <button type="button" className={style.registration__signup}>
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