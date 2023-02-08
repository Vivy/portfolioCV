import CV from '../../assets/cv.pdf';

const Cta = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>
        Download
      </a>
      <a href='#contact' className='btn btn-primary'>
        Let`s chat
      </a>
    </div>
  );
};

export default Cta;
