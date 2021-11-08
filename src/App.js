import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Suspense, lazy } from "react";
import Footer from "./Containers/Footer/Footer";
import Navigation from "./Containers/Navigation/Navigation";
const AboutPage = lazy(() => import("./Containers/AboutPage/AboutPage"));
const ContactPage = lazy(() => import("./Containers/ContactPage/ContactPage"));
const HomePage = lazy(() => import("./Containers/HomePage/HomePage"));
const PortfolioPage = lazy(() => import("./Containers/PortfolioPage/PortfolioPage"));
const ProcessPage = lazy(() => import("./Containers/ProcessPage/ProcessPage"));
const ReviewsPage = lazy(() => import("./Containers/ReviewsPage/ReviewsPage"));

function App() {
  return (
    <Router>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/renovations-template/kitchens" component=""/*Kitchens*/ />
          <Route exact path="/renovations-template/basements" component=""/*Basements*/ />
          <Route exact path="/renovations-template/renovations-additions" component=""/*RenosAndAdditions*/ />
          <Route exact path="/renovations-template/portfolio" component={PortfolioPage} />
          <Route exact path="/renovations-template/about" component={AboutPage} /> 
          <Route exact path="/renovations-template/process" component={ProcessPage} /> 
          <Route exact path="/renovations-template/contact" component={ContactPage} />
          <Route exact path="/renovations-template/reviews" component={ReviewsPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
