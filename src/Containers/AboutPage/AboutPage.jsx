import IMAGES from "../../images/images";
import HeroCarousel from "../../Components/HeroCarousel/HeroCarousel";
import SideBySideSection from "../../Components/SideBySideSection/SideBySideSection";
import ReviewsSection from "../../Components/ReviewsSection/ReviewsSection";

const AboutPage = () => {
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
        </main>
    );
};

export default AboutPage;