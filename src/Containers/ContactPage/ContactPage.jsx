import FormSection from "../../Components/FormSection/FormSection";
import IMAGES from "../../images/images";
import SideBySideSection from "../../Components/SideBySideSection/SideBySideSection";

const ContactPage = () => {
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
      <FormSection />
    </main>
  );
};

export default ContactPage;
