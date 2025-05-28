import "../Effects.css";
import { motion } from "framer-motion";
import myimage from "/src/assets/mypicture.png";

const Intro = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="intro-section"
    >
      <div className="intro-container">
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
      </div>
      <img
        src={myimage}
        className="hover-shadow full-page-image"
        alt="mypicture"
      />
    </motion.div>
  );
};

export default Intro;
