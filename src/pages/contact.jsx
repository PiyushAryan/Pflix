import Navbar from '../components/navbar'
import Footer from '../components/footer'
import MapComponent from '../components/map'
import ContactForm from '../components/ContactForm'
import 'leaflet/dist/leaflet.css';



function Contact() {


  return (
    <>
      <Navbar />
      <div className='text-center text-lime-500 font-bold text-4xl'>Contact</div>
      <div className=' flex text-center text-red-200 font-bold text-2xl mb-10'>
        <MapComponent />
        </div>       
      <Footer />
    </>
  )
}

export default Contact