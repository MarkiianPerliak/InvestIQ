import React from 'react'
import style from "./Header.module.css";
type Props = {}

export default function Header({}: Props) {
  return (
    <header>
        <img src="" alt="" className={style.header__logo} />

        <div className={style.header__options}>
          <img src="" alt="" className={style.header__profile} />
          <p className={style.header__username}></p>
          <button className={style.header__logout}></button>
        </div>
    </header>
  )
}