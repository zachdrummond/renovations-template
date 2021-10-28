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
      <Suspense fallback={<div>Loading...</div>}>
        <Slideshow />
        <Reviews />
        <Contact />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
