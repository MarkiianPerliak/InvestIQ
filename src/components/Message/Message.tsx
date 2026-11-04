import style from "./Message.module.css";

import React from 'react'

type Props = {}

export default function Message({}: Props) {
  return (
    <div className={style.message}>
        <button className={style.message__close}></button>
        <p className={style.message__text}></p>
        <div className={style.message__buttons}>
            <button className={style.message__yes}></button>
            <button className={style.message__no}></button>
        </div>
    </div>
  )
}