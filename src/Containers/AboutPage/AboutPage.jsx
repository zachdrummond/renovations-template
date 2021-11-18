import IMAGES from "../../images/images";
import SideBySideSection from "../../Components/SideBySideSection/SideBySideSection";

const AboutPage = () => {
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
    </main>
  );
};

export default AboutPage;
