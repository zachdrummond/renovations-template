import IMAGES from "../../images/images";
import HeroCarousel from "../../Components/HeroCarousel/HeroCarousel";
import SideBySideSection from "../../Components/SideBySideSection/SideBySideSection";
import HowItWorksSection from "../../Components/HowItWorksSection/HowItWorksSection";
import PortfolioSection from "../../Components/PortfolioSection/PortfolioSection";

// SUMMARY -
const HomePage = () => {
  return (
    <main>
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
      <HowItWorksSection
        card3Title="Love Your New Home"
        card3Text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Officiis ut exercitationem quisquam dolor quasi repudiandae sed iste 
        enim sunt eum tempore architecto nobis, tenetur fugit porro doloribus assumenda ad rem?"
      />
      <PortfolioSection
        title="Our"
        image1={IMAGES.placeholder}
        image2={IMAGES.placeholder}
        image3={IMAGES.placeholder}
      />
    </main>
  );
};

export default HomePage;
