import React from 'react'
import style from "./Registration.module.css";
import { useForm, type SubmitHandler } from "react-hook-form"

type FormValues = {
  email: string,
  password: string
}


export default function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { email: "" },
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)
  return (
    <div className={style.registration}>
      <div className={style.registration__left}>
        <h1 className={style.registration__headline}></h1>
        <h3 className={style.registration__text}></h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={style.registration__form} action="">
        <h3 className={style.registration__text}></h3>
        <button className={style.registration__google}></button>
        <h3 className={style.registration__text}></h3>
        <label className={style.registration__emaill} htmlFor=""></label>
        <input        id="email"
        type="text"
        aria-invalid={errors.email ? "true" : "false"}
        {...register("email", { required: "Email is required" })} className={style.registration__email} />
        {errors.email && <p role="alert">{errors.email.message}</p>}
        <label className={style.registration__passwordl} htmlFor=""></label>
        <input        id="email"
        type="password"
        aria-invalid={errors.email ? "true" : "false"}
        {...register("password", { required: "Password is required" })} className={style.registration__password} />
        {errors.password && <p role="alert">{errors.password.message}</p>}
        <button type='submit' className={style.registration__login}>login</button>
        <button type='submit' className={style.registration__signup}>singup</button>
      </form>
    </div>
  )
}