import About from './component/about/about';
import Contact from './component/contact/contact';
import Experience from './component/experience/experience';
import Footer from './component/footer/footer';
import Header from './component/header/header';
import Nav from './component/nav/nav';
import Services from './component/services/services';
import Testimonials from './component/testimonials/testimonials';
import Portfolio from './component/portfolio/portfolio';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
