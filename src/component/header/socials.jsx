import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { SiCodewars } from 'react-icons/si';

const Socials = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com' target='_blank'>
        <BsLinkedin />
      </a>
      <a href='https://github.com' target='_blank'>
        <BsGithub />
      </a>
      <a href='https://codewars.com' target='_blank'>
        <SiCodewars />
      </a>
    </div>
  );
};

export default Socials;
