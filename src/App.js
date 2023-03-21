import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/footer/Footer'
import Featured from './Components/featured/featured';
import Trusted from './Components/trustedby/trusted';
import Swipe from './Components/swipe/Swipe'
import Freelancer from './Components/freelancer/Freelancer';
import Business from './Components/fiverbusiness/Business'
import Swipping2 from './Components/swiper2/Swipping2';
import Icons from './Components/icons/Icons';
import Logobanner from './Components/logobanner/Logobanner';

function App() {
  return (
    <div>
    <Navbar/>
    <Featured/>
    <Trusted />
    <Swipe/>
    <Freelancer/>
    <Icons/>
    <Business/>
    <Swipping2/>
    <Logobanner/>
    <Footer/>
    </div>
  );
}

export default App;
