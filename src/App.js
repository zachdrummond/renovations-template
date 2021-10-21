import Contact from "./Components/Contact/Contact";
import Footer from "./Containers/Footer/Footer"
import Navigation from "./Containers/Navigation/Navigation";
import Reviews from "./Components/Reviews/Reviews.jsx";

function App() {
  return (
    <>
      <Navigation />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
