import { motion } from "framer-motion";
import "../Effects.css";
import myimage from "/src/assets/my-photo2-no-bg.png";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="overflow-hidden">
          <div className="about-container w-100 h-100">
            <div className="d-flex pe-5 my-5 my-0">
              <div className="col-lg-5">
                <img
                  src={myimage}
                  id="myphoto2"
                  alt="mypicture"
                  className="about-img img-fluid"
                />
              </div>
              <div className="col-lg-5">
                <div className="col-lg-5 about-txt">
                  <h1
                    className="me-5 mb-2"
                    style={{ fontFamily: "ThunderBoldLC" }}
                  >
                    About Me
                  </h1>
                  <p
                    className="me-5 fs-5 text-justify"
                    // style={{ fontFamily: "ThunderLCText" }}
                  >
                    I am an innovative Computer Science graduate specialized in
                    machine learning development. I am also an AWS Certified
                    Solutions Architect - Associate with hands-on experience in
                    developing solutions in Cloud Computing environment and
                    Vision Transformer-based disease classification models,
                    Natural Language Processing, and responsive web
                    applications. Skilled in leveraging tools such as Python,
                    Java, and AWS Bedrock for real-world applications. Competent
                    at problem-solving, collaboration, and project management,
                    honed through leadership roles and technical projects.
                    Passionate about driving technological advancements and
                    contributing to impactful, user-centered innovations.
                  </p>

                  <div className="me-5 mt-4 cert-container">
                    <h1
                      className="fs-2 mb-3"
                      style={{ fontFamily: "ThunderBoldLC" }}
                    >
                      Certifications and Badges
                    </h1>
                    <div className="d-flex flex-row gap-3 cert-badges">
                      <div className="cert-badge">
                        <a href="https://www.credly.com/badges/920a2481-984f-4d20-852e-ab11294de2bf/public_url">
                          <img
                            src="https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/twitter_thumb_201604_image.png"
                            alt="AWS Certified Solutions Architect Associate"
                            className="img-fluid"
                            style={{ maxWidth: "120px" }}
                          />
                        </a>
                      </div>
                      <div className="cert-badge">
                        <a href="https://www.credly.com/badges/0881cdd4-9e29-4f76-a3ef-b9a4fef817ae/public_url">
                          <img
                            src={
                              "https://images.credly.com/size/340x340/images/ec621e2a-c8f0-4459-806c-ae11829d372a/image.png"
                            }
                            alt="AWS Certified Solutions Architect Associate"
                            className="img-fluid"
                            style={{ maxWidth: "120px" }}
                          />
                        </a>
                      </div>
                      <div className="cert-badge">
                        <a href="https://www.credly.com/badges/d28e1204-7f5c-4786-8549-e18c80f3dbaf/public_url">
                          <img
                            src={
                              "https://images.credly.com/size/340x340/images/519a6dba-f145-4c1a-85a2-1d173d6898d9/image.png"
                            }
                            alt="AWS Certified Solutions Architect Associate"
                            className="img-fluid"
                            style={{ maxWidth: "120px" }}
                          />
                        </a>
                      </div>
                      {/* Add more certification badges here using the same structure */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
