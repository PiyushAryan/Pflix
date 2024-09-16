import Navbar from '../components/navbar'
import Footer from '../components/footer'
import MapComponent from '../components/map'
import 'leaflet/dist/leaflet.css';



function Contact() {


  return (
    <>
      <Navbar />
      <div className='mt-20 text-center text-lime-500 font-bold text-4xl'>Contact</div>
      <div className='mt-20 text-center text-white font-bold text-2xl'>
        <MapComponent className='50%' />
        <div className='text-center text-white font-bold text-2xl'>Contact Me</div>
        <div className='text-center text-white font-bold text-xl'>Email:
          <a href='mailto:piyusharyan81@gmail.com' className='text-lime-500'></a>
        </div>
      </div>
      <Footer />


    </>
  )
}

export default Contact