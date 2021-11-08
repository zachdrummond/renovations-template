import HeroCarousel from "../../Components/HeroCarousel/HeroCarousel";
import SideBySideSection from "../../Components/SideBySideSection/SideBySideSection";
import HowItWorksSection from "../../Components/HowItWorksSection/HowItWorksSection";
import PortfolioSection from "../../Components/PortfolioSection/PortfolioSection";
import ReviewsSection from "../../Components/ReviewsSection/ReviewsSection";

const HomePage = () => {
  return (
    <>
      <HeroCarousel />
      <SideBySideSection />
      <SideBySideSection />
      <SideBySideSection />
      <HowItWorksSection />
      <PortfolioSection />
      <ReviewsSection />
    </>
  );
};

export default HomePage;
