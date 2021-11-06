import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Suspense, lazy } from "react";
import Footer from "./Containers/Footer/Footer";
import Navigation from "./Containers/Navigation/Navigation";
const Home = lazy(() => import("./Containers/Home/Home"));

function App() {
  return (
    <Router>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/kitchens" component=""/*Kitchens*/ />
          <Route exact path="/basements" component=""/*Basements*/ />
          <Route exact path="/renovations-additions" component=""/*RenosAndAdditions*/ />
          <Route exact path="/portfolio" component=""/*Portfolio*/ />
          <Route exact path="/about" component=""/*About*/ /> 
          <Route exact path="/process" component=""/*Process*/ /> 
          <Route exact path="/contact" component=""/*Contact*/ />
          <Route exact path="/reviews" component=""/*Reviews*/ />
          <Route path="/" component={Home} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
