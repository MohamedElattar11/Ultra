
import Nav from './Component/Navbar/Nav';
import Contact from './Component/Contact/Contact';
import All from './Component/All/All';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
import Work from './Component/Work/Work';
import Protfoilo from './Component/Portfiolio/Protfoilo';
import About from './Component/About/About';
import Profile from './Component/Profile/Profile';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route exact path='/' element={<All/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/work' element={<Work/>}/>
      <Route path='/portfolio' element={<Protfoilo/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/about' element={<About/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
