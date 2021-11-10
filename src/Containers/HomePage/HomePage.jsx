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
        title="TITLE"
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
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            suscipit, consectetur obcaecati commodi vitae soluta quo assumenda
            cumque explicabo illo architecto, nesciunt aut, doloribus veritatis?
            Eaque, officia. Sit, nostrum molestias."
      />
      <SideBySideSection
        direction="right"
        title="TITLE"
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
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Autem architecto, fuga culpa commodi accusantium reprehenderit 
        omnis fugiat, alias porro sapiente, esse quo necessitatibus 
        nostrum excepturi? Minus porro voluptatum perferendis exercitationem."
      />
      <SideBySideSection
        direction="left"
        title="TITLE"
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
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Et, quasi quam cumque neque vitae ducimus nemo labore nostrum 
        odio blanditiis sequi est autem dolores, maxime corrupti. 
        Recusandae vero laborum placeat."
      />
      <HowItWorksSection />
      <PortfolioSection />
      <ReviewsSection />
    </>
  );
};

export default HomePage;
