import React from 'react'
import style from "./Transactions.module.css";
type Props = {}

export default function Transactions({}: Props) {
  return (
    <div className={style.transactions}>
        <div>
            <form className={style.transactions__balance_form} action="">
                <label className={style.transactions__balance} htmlFor=""></label>
                <input className={style.transactions__input} type="text" />
                <button className={style.transactions__confirm}></button>
            </form>
            <button className={style.transactions__dashboard}><img className={style.transactions__dashicon} src="" alt="" /></button>
        </div>
        <div className={style.transactions__box}>
            <button className={style.transactions__spending}></button>
            <button className={style.transactions__pending}></button>
            <div className={style.transactions__flex_box}>
                <img className={style.transactions__dateicon} src="" alt="" />
                <p className={style.transactions__date}></p>
                <form className={style.transactions__spend_form} action="">
                    <input className={style.transactions__desc_input} type="text" />
                    <select className={style.transactions__category_select} name="" id="">

                    </select>
                    <input className={style.transactions__money} type="text" />
                    <img className={style.transactions__money_icon} src="" alt="" />
                    <button className={style.transactions__send}></button>
                    <button className={style.transactions__clear}></button>
                </form>
            </div>

            <div className={style.transactions__spendings}>
                <div className={style.transactions__left}>
                    <div className={style.transactions__header}>
                        <p className={style.transactions__date}></p>
                        <p className={style.transactions__desc}></p>
                        <p className={style.transactions__category}></p>
                        <p className={style.transactions__totalt}></p>
                    </div>
                    <ul className={style.transactions__list}>
                        <li className={style.transactions__item}>
                            <p className={style.transactions__datei}></p>
                            <p className={style.transactions__desci}></p>
                            <p className={style.transactions__categoryi}></p>
                            <p className={style.transactions__totali}></p>
                            <button className={style.transactions__delete}><img className={style.transactions__trashcan} src="" alt="" /></button>
                        </li>
                    </ul>
                </div>


                <div className={style.transactions__total}>
                    <div className={style.transactions__total_header}>
                        <p className={style.transactions__results}></p>
                    </div>
                    <ul className={style.transactions__combined}>
                        <li className={style.transactions__combined_item}>
                            <p className={style.transactions__month}></p>
                            <p className={style.transactions__value}></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}