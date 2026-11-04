import React from 'react'
import style from "./Transactions.module.css";
type Props = {}

export default function Dashboard({}: Props) {
  return (
    <div className={style.dashboard}>
        <div>
            <button><img src="" alt="" /></button>
            <form className={style.dashboard__balance_form} action="">
                <label className={style.dashboard__balance} htmlFor=""></label>
                <input className={style.dashboard__input} type="text" />
                <button className={style.dashboard__confirm}></button>
            </form>
            <div className={style.dashboard__configure}>
                <p className={style.dashboard__text}></p>
                <button className={style.dashboard__arrow_left}><img className={style.dashboard__arrowl} src="" alt="" /></button>
                <div className={style.dashboard__date_list}>
                    <p className={style.dashboard__month}></p>
                    <p className={style.dashboard__year}></p>
                </div>

                <button className={style.dashboard__arrow_right}><img className={style.dashboard__arrowr} src="" alt="" /></button>
            </div>
        </div>

        <div className={style.dashboard__top}>
            <div className={style.dashboard__spendings}>
                <p className={style.dashboard__spending}></p>
                <p className={style.dashboard__svalue}></p>
            </div>
            <div className={style.dashboard__pendings}>
                <p className={style.dashboard__pending}></p>
                <p className={style.dashboard__pvalue}></p>
            </div>
        </div>

        <div className={style.dashboard__box}>
            <div className={style.dashboard__changer}>
                <button className={style.dashboard__arrow_left}></button>
                <p className={style.dashboard__textch}></p>
                <button className={style.dashboard__arrow_left}></button>
            </div>
            <ul className={style.dashboard__list}>
                <li className={style.dashboard__item}>
                    <p className={style.dashboard__money}></p>
                    <img className={style.dashboard__icon} src="" alt="" />
                    <p className={style.dashboard__desc}></p>
                </li>
            </ul>
        </div>

        <div className={style.dashboard__boardb}>

        </div>
    </div>
  )
}