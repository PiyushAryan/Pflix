import Navbar from '../components/navbar';
import Footer from '../components/footer';
import SkillGrid from '../components/skillgrid';

function skills() {
  return (
    <>
      <Navbar />
      <div><h1 className='text-5xl text-white mt-20 text-center'>Skills</h1></div>
      <SkillGrid />
      <Footer />
      
    </>
  )
}

export default skills;