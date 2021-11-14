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
      <SideBySideSection
        direction="left"
        title="TITLE"
        image={IMAGES.placeholder}
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
        suscipit, consectetur obcaecati commodi vitae soluta quo assumenda
        cumque explicabo illo architecto, nesciunt aut, doloribus veritatis?
        Eaque, officia. Sit, nostrum molestias."
      />
      <SideBySideSection
        direction="right"
        title="TITLE"
        image={IMAGES.placeholder}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Autem architecto, fuga culpa commodi accusantium reprehenderit 
        omnis fugiat, alias porro sapiente, esse quo necessitatibus 
        nostrum excepturi? Minus porro voluptatum perferendis exercitationem."
      />
      <SideBySideSection
        direction="left"
        title="TITLE"
        image={IMAGES.placeholder}
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Et, quasi quam cumque neque vitae ducimus nemo labore nostrum 
        odio blanditiis sequi est autem dolores, maxime corrupti. 
        Recusandae vero laborum placeat."
      />
      <ReviewsSection/>
        </main>
    );
};

export default AboutPage;