import style from './Transactions.module.css';
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';
import Container from '../../Container/Container';

type Props = {};

const emptyRows = Array.from({ length: 9 }, (_, index) => index);

export default function Transactions({ }: Props) {
  return (
    <>
      <Header showUser />
      <main className={`page ${style.transactions}`}>
        <Container className={style.transactions__scaled}>
          <header className={style.transactions__topbar}>
            <form className={style.transactions__balance_form} action="">
              <label className={style.transactions__balance} htmlFor="transaction-balance">
                Баланс:
              </label>
              <div className={style.transactions__balance_control}>
                <input
                  id="transaction-balance"
                  className={style.transactions__input}
                  type="text"
                  defaultValue="00.00"
                />
                <span className={style.transactions__currency}>UAH</span>
              </div>
              <button className={style.transactions__confirm} type="submit">
                ПІДТВЕРДИТИ
              </button>
            </form>

            <Link className={style.transactions__dashboard} to="/dashboard">
              Перейти до розрахунків
              <svg
                className={style.transactions__dashicon}
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M3 11h3v7H3zm5-6h3v13H8zm5-3h3v16h-3z" fill="currentColor" />
              </svg>
            </Link>
          </header>

          <section className={style.transactions__box} aria-label="Транзакції">
            <div className={style.transactions__tabs} role="tablist" aria-label="Тип транзакції">
              <button
                className={`${style.transactions__tab} ${style.transactions__tab_active}`}
                type="button"
                role="tab"
                aria-selected="true"
              >
                ВИТРАТИ
              </button>
              <button
                className={style.transactions__tab}
                type="button"
                role="tab"
                aria-selected="false"
              >
                ДОХІД
              </button>
            </div>

            <form className={style.transactions__entry_form} action="">
              <div className={style.transactions__date_field}>
                <svg className={style.transactions__dateicon} viewBox="0 0 20 20" aria-hidden="true">
                  <rect x="2" y="3" width="16" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M6 2v3M14 2v3M2 7h16M5 10h2m2 0h2m2 0h2M5 13h2m2 0h2m2 0h2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span className={style.transactions__date}>21.11.2019</span>
              </div>

              <div className={style.transactions__fields}>
                <input
                  className={style.transactions__desc_input}
                  type="text"
                  placeholder="Опис товару"
                  aria-label="Опис товару"
                />
                <div className={style.transactions__amount_field}>
                  <input
                    className={style.transactions__money}
                    type="text"
                    placeholder="0,00"
                    aria-label="Сума"
                  />
                  <svg className={style.transactions__money_icon} viewBox="0 0 20 20" aria-hidden="true">
                    <rect x="2" y="2" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M5 5h10v3H5zm0 6h2m2 0h2m2 0h2m-8 3h2m2 0h2m2 0h2" fill="none" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </div>
              </div>

              <button className={style.transactions__send} type="submit">
                ВНЕСТИ
              </button>
              <button className={style.transactions__clear} type="reset">
                ОЧИСТИТИ
              </button>
            </form>

            <div className={style.transactions__spendings}>
              <section className={style.transactions__left} aria-label="Список транзакцій">
                <div className={style.transactions__header} aria-hidden="true">
                  <span>ДАТА</span>
                  <span>ОПИС</span>
                  <span>КАТЕГОРІЯ</span>
                  <span>СУМА</span>
                </div>
                <div className={style.transactions__list} aria-label="Транзакції за обраний період">
                  {emptyRows.map((row) => (
                    <div className={style.transactions__item} key={row} />
                  ))}
                </div>
              </section>

              <aside className={style.transactions__total} aria-label="Зведення">
                <h2 className={style.transactions__total_header}>ЗВЕДЕННЯ</h2>
                <div className={style.transactions__combined} />
              </aside>
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
