import Hero from '../components/hero';
import Navbar from '../components/navbar';
import Body from '../components/body';
import Footer from '../components/footer';


function home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Body />
      <Footer />
    </>
  )
}

export default home;