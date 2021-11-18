import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Suspense, lazy } from "react";
import Footer from "./Containers/Footer/Footer";
import Navigation from "./Containers/Navigation/Navigation";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
const AboutPage = lazy(() => import("./Containers/AboutPage/AboutPage"));
const ContactPage = lazy(() => import("./Containers/ContactPage/ContactPage"));
const HeroCarousel = lazy(() => import("./Components/HeroCarousel/HeroCarousel"));
const HomePage = lazy(() => import("./Containers/HomePage/HomePage"));
const PortfolioPage = lazy(() => import("./Containers/PortfolioPage/PortfolioPage"));
const ProcessPage = lazy(() => import("./Containers/ProcessPage/ProcessPage"));
const ReviewsPage = lazy(() => import("./Containers/ReviewsPage/ReviewsPage"));
const ReviewsSection = lazy(() => import("./Components/ReviewsSection/ReviewsSection"));

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <HeroCarousel/>
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
        <ReviewsSection/>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
