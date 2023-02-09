import './about.css';
import Me from '../../assets/Ai2.jpg';
import { FaAward, FaUsers } from 'react-icons/fa';
import { AiOutlineFolderOpen } from 'react-icons/ai';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Me} alt='About me' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className='about__card'>
              <FaUsers className='about__icon' />
              <h5>Clients</h5>
              <small>9 WorldWide</small>
            </article>
            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>13</small>
            </article>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi omnis
            praesentium mollitia temporibus non. Iusto quo a officia, rem
            voluptatem aliquam non accusantium maxime veniam ipsa, architecto,
            nostrum molestiae iure.
          </p>

          <a href='#contact' className='btn btn-primary'>
            Let`s Chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
