import Navbar from '../components/navbar'
import Footer from '../components/footer'



function Contact() {


  return (
    <>
      <Navbar />
      <div className='mt-20 text-center text-lime-500 font-bold text-4xl'>Contact</div>
      <div className='mt-20 text-center text-white font-bold text-2xl'>
        <iframe className='mx-auto right-10 my-10'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.876467010623!2d85.33652567536815!3d24.000138979142832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f49ebe73e9589b%3A0xedd1093240f2094e!2sTridev%20Mandir!5e0!3m2!1sen!2sin!4v1726437002607!5m2!1sen!2sin"
          width="500"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps">
        </iframe>
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