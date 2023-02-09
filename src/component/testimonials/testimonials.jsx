import './testimonials.css';
import Av1 from '../../assets/profileAI.jpg';

const data = [
  {
    avatar: Av1,
    name: 'Gigi PuChiNa',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur deserunt atque libero earum sit placeat omnis, qui exercitationem ad praesentium sint fuga labore sapiente, porro explicabo facere tempore incidunt. Sequi dolorem blanditiis repudiandae veniam incidunt at minima.',
  },
  {
    avatar: Av1,
    name: 'StapaNul SpideRMan',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur deserunt atque libero earum sit placeat omnis, qui exercitationem ad praesentium sint fuga labore sapiente, porro explicabo facere tempore incidunt. Sequi dolorem blanditiis repudiandae veniam incidunt at minima.',
  },
  {
    avatar: Av1,
    name: 'CoaNa BuCi',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur deserunt atque libero earum sit placeat omnis, qui exercitationem ad praesentium sint fuga labore sapiente, porro explicabo facere tempore incidunt. Sequi dolorem blanditiis repudiandae veniam incidunt at minima.',
  },
  {
    avatar: Av1,
    name: 'Aia FreMoasA',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur deserunt atque libero earum sit placeat omnis, qui exercitationem ad praesentium sint fuga labore sapiente, porro explicabo facere tempore incidunt. Sequi dolorem blanditiis repudiandae veniam incidunt at minima.',
  },
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className='container testimonials__container'>
        {data.map(({ avatar, name, review }, index) => {
          return (
            <article key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt='Avatar One' />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
