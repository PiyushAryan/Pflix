import Navbar from '../components/navbar';
import Footer from '../components/footer';
import SkillGrid from '../components/skillgrid';

function skills() {
  return (
    <>
    <div className='min-h-screen pt-16 mt-3'> 
      <Navbar />
      <SkillGrid />
      <Footer />
      </div>
      
    </>
  )
}

export default skills;