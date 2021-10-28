import { Suspense, lazy } from "react";
const Contact = lazy(() => import("./Components/Contact/Contact"));
import Footer from "./Containers/Footer/Footer";
import Navigation from "./Containers/Navigation/Navigation";
const Reviews = lazy(() => import("./Components/Reviews/Reviews.jsx"));
const Slideshow = lazy(() => import("./Components/Slideshow/Slideshow"));

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
