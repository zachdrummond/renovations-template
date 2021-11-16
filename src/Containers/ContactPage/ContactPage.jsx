import ContactForm from "../../Components/ContactForm/ContactForm";
import IMAGES from "../../images/images";
import HeroCarousel from "../../Components/HeroCarousel/HeroCarousel";
import SideBySideSection from "../../Components/SideBySideSection/SideBySideSection";
import ReviewsSection from "../../Components/ReviewsSection/ReviewsSection";

const ContactPage = () => {
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
      <ContactForm />
      <ReviewsSection />
    </main>
  );
};

export default ContactPage;
