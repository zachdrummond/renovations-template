import IMAGES from "../../images/images";

// SECTION - Navbar & Footer
// SUMMARY - Displays the company logo
const CompanyLogo = () => {
  return (
    <img
      className="img-fluid"
      alt="Your Logo Here"
      src={IMAGES.YourLogoHere}
      width="150"
    />
  );
};

export default CompanyLogo;
