import HeroCarousel from "../../Components/HeroCarousel/HeroCarousel";
import SideBySideSection from "../../Components/SideBySideSection/SideBySideSection";
import HowItWorksSection from "../../Components/HowItWorksSection/HowItWorksSection";
import PortfolioSection from "../../Components/PortfolioSection/PortfolioSection";
import ReviewsSection from "../../Components/ReviewsSection/ReviewsSection";

const HomePage = () => {
  return (
    <>
      <HeroCarousel />
      <SideBySideSection
        direction="left"
        image={
          <svg
            className="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="#777"></rect>
          </svg>
        }
        text={
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            suscipit, consectetur obcaecati commodi vitae soluta quo assumenda
            cumque explicabo illo architecto, nesciunt aut, doloribus veritatis?
            Eaque, officia. Sit, nostrum molestias.
          </p>
        }
      />
      <SideBySideSection />
      <SideBySideSection />
      <HowItWorksSection />
      <PortfolioSection />
      <ReviewsSection />
    </>
  );
};

export default HomePage;
