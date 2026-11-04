import React from 'react'
import style from "./Header.module.css";
type Props = {}

export default function Registration({}: Props) {
  return (
    <div className={style.registration}>
      <div className={style.registration__left}>
        <h1 className={style.registration__headline}></h1>
        <h3 className={style.registration__text}></h3>
      </div>

      <form className={style.registration__form} action="">
        <h3 className={style.registration__text}></h3>
        <button className={style.registration__google}></button>
        <h3 className={style.registration__text}></h3>
        <label className={style.registration__emaill} htmlFor=""></label>
        <input className={style.registration__email} type="text" />
        <label className={style.registration__passwordl} htmlFor=""></label>
        <input className={style.registration__password} type="text" />
        <button type='submit' className={style.registration__login}></button>
        <button type='submit' className={style.registration__signup}></button>
      </form>
    </div>
  )
}