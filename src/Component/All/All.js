import Home from './../Home/Home'
import Work from "./../Work/Work";
import Footer from "./../Footer/Footer";
import About from "./../About/About";
import Protfiolio from "./../Portfiolio/Protfoilo";
import Profile from "./../Profile/Profile";
import Social from "./../SocialMedia/Social";

function All() {
  return (
    <div>
      <Home />
      <Work />
      <Protfiolio />
      <Profile />
      <About />
      <Social />
      
    </div>
  );
}

export default All;
