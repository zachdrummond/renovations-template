import { Link } from "react-router-dom";
import IMAGES from "../../images/images";

// SECTION - Navbar & Footer
// SUMMARY - Displays the company logo
const CompanyLogo = () => {
  return (
    <Link to="/">
      <img
        className="img-fluid"
        alt="Your Logo Here"
        src={IMAGES.YourLogoHere}
        width="150"
      />
    </Link>
  );
};

export default CompanyLogo;
