import Link from 'next/link';
import NavStyles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={NavStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;

// Add the nav in Layout to be not contained
