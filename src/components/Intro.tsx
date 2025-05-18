import "../Effects.css";
import { motion } from "framer-motion";
import myimage from "/src/assets/mypicture.png";
import fblogo from "/src/assets/facebook-icon.svg";
import iglogo from "/src/assets/instagram-icon.svg";
import linkedin from "/src/assets/linkedin-icon.svg";

const Intro = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
      >
        <div className="responsive-container">
          <div className="intro-container ms-5 ps-5">
            <div className="name-stack">
              <h1
                style={{
                  fontSize: "90px",
                  fontFamily: "ThunderBoldLC",
                  lineHeight: "0.9",
                  marginBottom: "0",
                }}
              >
                FRANCIS ANGELO
              </h1>
              <h1
                style={{
                  fontSize: "200px",
                  fontFamily: "ThunderBoldLC",
                  lineHeight: "0.8",
                  marginTop: "0",
                }}
              >
                FUNDAL
              </h1>
            </div>
            <h4 style={{ fontSize: "35px", fontFamily: "ThunderLCItalic" }}>
              "Still trying to be better.. At Cloud"
            </h4>
            <div className="mt-3 me-3">
              <a href="https://www.facebook.com/Fundaldesu">
                <img
                  src={fblogo}
                  alt="fb-icon"
                  style={{ maxWidth: "30%" }}
                  className="logo-hover"
                />
              </a>
              <a href="https://www.instagram.com/hahafundal/">
                <img
                  src={iglogo}
                  alt="ig-icon"
                  style={{ maxWidth: "30%" }}
                  className="logo-hover"
                />
              </a>

              <a href="https://www.linkedin.com/in/francisfundal/">
                <img
                  src={linkedin}
                  alt="linkedin-icon"
                  style={{ maxWidth: "30%" }}
                  className="logo-hover"
                />
              </a>
            </div>
          </div>
        </div>

        <img
          src={myimage}
          className="hover-shadow full-page-image"
          alt="mypicture"
        />
      </motion.div>
    </>
  );
};

export default Intro;
