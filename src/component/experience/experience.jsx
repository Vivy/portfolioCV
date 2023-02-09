import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';
const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>FrontEnd Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediare</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediare</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediare</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediare</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
          <h3>BackEnd Development</h3>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Beginner</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>NodeJs</h4>
              <small className='text-light'>Beginner</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>PHP</h4>
              <small className='text-light'>Dirt</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>MySQL</h4>
              <small className='text-light'>Zero</small>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
