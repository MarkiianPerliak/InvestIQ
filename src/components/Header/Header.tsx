import { Link } from 'react-router-dom';
import style from './Header.module.css';
import Container from '../Container/Container';

type Props = {
  showUser: boolean;
};

export default function Header({ showUser }: Props) {
  return (
    <header className={style.header}>
      <Container className={style.header__inner}>
        <Link className={style.header__logo} to="/" aria-label="InvestIQ home">
          <span className={style.header__mark} aria-hidden="true" />
          <span className={style.header__wordmark}>INVESTIQ</span>
        </Link>

        {showUser && (
          <div className={style.header__options}>
            <span className={style.header__profile} aria-hidden="true">U</span>
            <span className={style.header__username}>User Name</span>
            <span className={style.header__divider} aria-hidden="true" />
            <Link className={style.header__logout} to="/">
              Вийти
            </Link>
          </div>
        )}
      </Container>
    </header>
  );
}
