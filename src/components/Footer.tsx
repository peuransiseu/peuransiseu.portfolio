import fblogo from "/src/assets/facebook-icon.svg";
import iglogo from "/src/assets/instagram-icon.svg";
import linkedin from "/src/assets/linkedin-icon.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-content-text">
          <h1 style={{fontFamily:  "ThunderBoldLC", fontSize: "80px", marginTop: "30px"}}>Contact Me!</h1>
        </div>
        
        <div className="social-links">
          
          <a
            href="https://www.facebook.com/Fundaldesu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={fblogo}
              alt="Facebook"
              className="social-icon logo-hover"
            />
          </a>
          <a
            href="https://www.instagram.com/hahafundal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={iglogo}
              alt="Instagram"
              className="social-icon logo-hover"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/francisfundal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="social-icon logo-hover"
            />
          </a>
        </div>
       
      </div>
       <p className="copyright">
          © 2024 Francis Angelo Fundal. All rights reserved.
        </p>
    </div>
  );
};

export default Footer;
