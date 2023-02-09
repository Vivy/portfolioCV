import './footer.css';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { SiTiktok } from 'react-icons/si';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        Vivy
      </a>

      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'>
          <BsFacebook />
        </a>
        <a href='https://instagram.com'>
          <GrInstagram />
        </a>
        <a href='https://twitter.com'>
          <BsTwitter />
        </a>
        <a href='https://tiktok.com'>
          <SiTiktok />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Vivy Doing Stuff. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
