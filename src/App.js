import Contact from "./Components/Contact/Contact";
import Footer from "./Containers/Footer/Footer";
import Navigation from "./Containers/Navigation/Navigation";
import Reviews from "./Components/Reviews/Reviews.jsx";
import Slideshow from "./Components/Slideshow/Slideshow";

function App() {
  return (
    <>
      <Navigation />
      <Slideshow />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
