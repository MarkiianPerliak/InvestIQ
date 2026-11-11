import style from './Dashboard.module.css';
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';
import Container from '../../Container/Container';

type Props = {};

export default function Dashboard({}: Props) {
  return (
    <>
      <Header showUser />
      <main className={`page ${style.dashboard}`}>
        <Container className={style.dashboard__scaled}>
          <div className={style.dashboard__header}>
            <Link to="/transactions" className={style.dashboard__back}>
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 11H6.83L10.41 7.41L9 6L3 12L9 18L10.41 16.59L6.83 13H21V11Z" fill="currentColor" />
              </svg>
              Повернутись на головну
            </Link>

            <form className={style.dashboard__balance_form} action="">
              <label className={style.dashboard__balance} htmlFor="balance-wallet">
                Баланс:
              </label>
              <div className={style.dashboard__balance_control}>
                <input
                  id="balance-wallet"
                  className={style.dashboard__input}
                  type="text"
                  defaultValue="55 000.00"
                />
                <span className={style.dashboard__currency}>UAH</span>
              </div>
              <button type="submit" className={style.dashboard__confirm}>
                ПІДТВЕРДИТИ
              </button>
            </form>

            <div className={style.dashboard__configure}>
              <span className={style.dashboard__text}>Поточний період</span>
              <button type="button" className={style.dashboard__arrow_left} aria-label="Previous month">
                <svg width="7" height="12" viewBox="0 0 7 12" aria-hidden="true">
                  <path d="M5.28 0.62L1.28 5.62L5.28 10.62" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className={style.dashboard__date_list}>
                <span className={style.dashboard__month}>ЛИСТОПАД</span>
                <span className={style.dashboard__year}>2019</span>
              </div>
              <button type="button" className={style.dashboard__arrow_right} aria-label="Next month">
                <svg width="7" height="12" viewBox="0 0 7 12" aria-hidden="true">
                  <path d="M1.72 0.62L5.72 5.62L1.72 10.62" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <div className={style.dashboard__summary}>
            <div className={style.dashboard__summary_item}>
              <span>Витрати:</span>
              <strong>- 18 000.00 грн.</strong>
            </div>
            <div className={style.dashboard__summary_item}>
              <span>Доходи:</span>
              <strong>+ 45 000.00 грн.</strong>
            </div>
          </div>

          <div className={style.dashboard__panel}>
            <div className={style.dashboard__panel_header}>
              <button type="button" className={style.dashboard__panel_arrow} aria-label="Previous category range">
                <svg width="7" height="12" viewBox="0 0 7 12" aria-hidden="true">
                  <path d="M5.28 0.62L1.28 5.62L5.28 10.62" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <span>ВИТРАТИ</span>
              <button type="button" className={style.dashboard__panel_arrow} aria-label="Next category range">
                <svg width="7" height="12" viewBox="0 0 7 12" aria-hidden="true">
                  <path d="M1.72 0.62L5.72 5.62L1.72 10.62" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <div className={style.dashboard__board}>
            <div className={style.dashboard__chart} role="img" aria-label="Графік витрат" />
          </div>
        </Container>
      </main>
    </>
  );
}
