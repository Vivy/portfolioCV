import Cta from './cta';
import './header.css';
import Me from '../../assets/Ai1.jpg';
import Socials from './socials';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I`m</h5>
        <h1>Vivy</h1>
        <h5 className='text-light'>Front End Developer</h5>
        <Cta />
        <Socials />

        <div className='me'>
          <img src={Me} alt='me' />
        </div>
        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
