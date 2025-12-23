import { Link } from 'react-router-dom';
import N from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={N.nav}>
      <Link to="generate">Генерировать QR код</Link>
      <Link to="scan">Сканировать QR код</Link>
      <Link to="generateHistiry">История генерирования</Link>
      <Link to="scanHistiry">История сканирования</Link>
    </nav>
  );
};
