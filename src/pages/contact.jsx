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
        <MapComponent />
        </div>
        <div className="right-9">
          
        </div>
      <Footer />


    </>
  )
}

export default Contact