import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Suspense, lazy } from "react";
import Footer from "./Containers/Footer/Footer";
import Navigation from "./Containers/Navigation/Navigation";
const Contact = lazy(() => import("./Components/Contact/Contact"));
const Reviews = lazy(() => import("./Components/Reviews/Reviews.jsx"));
const Slideshow = lazy(() => import("./Components/Slideshow/Slideshow"));

function App() {
  return (
    <Router>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Slideshow />
          <Reviews />
          <Contact />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
