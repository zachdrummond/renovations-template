import IMAGES from "../../images/images";
import HeroCarousel from "../../Components/HeroCarousel/HeroCarousel";
import ReviewsSection from "../../Components/ReviewsSection/ReviewsSection";

const PortfolioPage = () => {
  return (
    <main>
      <HeroCarousel
        image1={IMAGES.placeholder}
        title1="First Slide Label"
        caption1="Add Caption Here"
        image2={IMAGES.placeholder}
        title2="Second Slide Label"
        caption2="Add Caption Here"
        image3={IMAGES.placeholder}
        title3="Third Slide Label"
        caption3="Add Caption Here"
      />
      <ReviewsSection />
    </main>
  );
};

export default PortfolioPage;
