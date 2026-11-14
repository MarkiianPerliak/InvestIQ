import { Link } from 'react-router-dom';
import style from './Header.module.css';

type Props = {
  showUser: boolean;
};

export default function Header({ showUser }: Props) {
  return (
    <header className={style.header}>
      <div className={style.header__inner}>
        <Link className={style.header__logo} to="/" aria-label="InvestIQ home">
          <span className={style.header__mark} aria-hidden="true" />
          <span className={style.header__wordmark}>INVESTIQ</span>
        </Link>

        {showUser && (
          <div className={style.header__options}>
            <span className={style.header__profile} aria-hidden="true">U</span>
            <span className={style.header__username}>User Name</span>
            <span className={style.header__divider} aria-hidden="true" />
            <Link className={style.header__logout} to="/" aria-label="Вийти">
              <span className={style.header__logout_text}>Вийти</span>
              <svg
                className={style.header__logout_icon}
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  d="M11 3H4v14h7M9 10h8m-3-3 3 3-3 3"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
