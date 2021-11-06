import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Suspense, lazy } from "react";
import Footer from "./Containers/Footer/Footer";
import Navigation from "./Containers/Navigation/Navigation";
const About = lazy(() => import("./Containers/About/About"));
const Contact = lazy(() => import("./Containers/Contact/Contact"));
const Home = lazy(() => import("./Containers/Home/Home"));
const Portfolio = lazy(() => import("./Containers/Portfolio/Portfolio"));
const Process = lazy(() => import("./Containers/Process/Process"));
const Reviews = lazy(() => import("./Containers/Reviews/Reviews"));

function App() {
  return (
    <Router>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/renovations-template/kitchens" component=""/*Kitchens*/ />
          <Route exact path="/renovations-template/basements" component=""/*Basements*/ />
          <Route exact path="/renovations-template/renovations-additions" component=""/*RenosAndAdditions*/ />
          <Route exact path="/renovations-template/portfolio" component={Portfolio} />
          <Route exact path="/renovations-template/about" component={About} /> 
          <Route exact path="/renovations-template/process" component={Process} /> 
          <Route exact path="/renovations-template/contact" component={Contact} />
          <Route exact path="/renovations-template/reviews" component={Reviews} />
          <Route path="/" component={Home} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
