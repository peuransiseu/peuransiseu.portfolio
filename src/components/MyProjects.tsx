// import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { motion } from "framer-motion";

const MyProjects = () => {
  return (
    <>
      <h1 className="section-header">Projects</h1>
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-fluid position-relative">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3s g-4 text-justify justify-content-center mt-3 column-gap-4">
            <div className="col card" style={{ width: "35rem" }}>
              <div className="card-header fs-3" style={{ fontFamily: "Geist-Medium" }}>Machine Learning</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item fs-4" style={{ fontFamily: "Geist" }}>
                  Natural Language Processing
                  <ul className="list p-3" style={{ fontFamily: "Geist-ExtraLight" }}>
                    <li className="lead fs-5" >
                      Spearheaded a paper project for Tagalog Language Safety
                      Evaluation using DistilmBERT, mBERT-base, and XLM-RoBERTa.
                    </li>
                    <li className="lead fs-5">
                      Fine-tuned pre-trained models and benchmarked results with
                      LLaMa-3.3-70B, achieving <strong>0.53%</strong> Attack
                      Success Rate with our Tagalog Prompt Shield.
                    </li>
                  </ul>
                </li>
                <li className="list-group-item fs-4" style={{ fontFamily: "Geist" }}>
                  Computer Vision
                  <ul className="list p-3" style={{ fontFamily: "Geist-ExtraLight" }}>
                    <li className="lead fs-5">
                      Spearheaded a paper thesis{" "}
                      <strong>
                        "Papaya Meets ViTGAN: A Deep Approach to Classification
                        of Papaya Diseases by Leveraging Vision Transformer to
                        Generative Adversarial Networks"
                      </strong>
                    </li>
                    <li className="lead fs-5">
                      An agricultural computer vision approach for papaya
                      disease classification using Vision Transformer-based
                      Generative Adversarial Network and Vision Transformer
                      (ViTDet-B) Classifier.
                    </li>
                    <li className="lead fs-5">
                      Fine-tuned YOLO-based model for the augmented dataset for
                      better distinction.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-3 card" style={{ width: "35rem" }}>
              <div className="card-header fs-3"  style={{ fontFamily: "Geist-Medium" }}>Cloud meets AI</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item fs-4"  style={{ fontFamily: "Geist" }}>
                  AWS Generative AI Bootcamp
                  <ul className="list p-3" style={{ fontFamily: "Geist-ExtraLight" }}>
                    <li className="lead fs-5">
                      Had a 10-day online workshop with AWS User Group Dehradun
                      (India) for Generative AI using AWS.
                    </li>
                    <li className="lead fs-5">
                      Exposed with AWS S3, Bedrock, Polly, Comprehend,
                      Rekognition, Lex, and Prompt Engineering which improved my
                      knowledge about cloud computing and Generative AI.
                    </li>
                    <li className="lead fs-5">
                      <strong>Work It Out!:</strong> Developed a web application
                      by integrating RAG into Claude 3 Sonnet to generate
                      workout flow for beginners who want to start in their
                      fitness journey.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-3 card" style={{ width: "35rem" }}>
              <div className="card-header fs-3"  style={{ fontFamily: "Geist-Medium" }}>Software Development</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item fs-4"  style={{ fontFamily: "Geist" }}>
                  Automated Fingerprint Attendance Processing System (Software
                  Engineering)
                  <ul className="list p-3"  style={{ fontFamily: "Geist-ExtraLight" }}>
                    <li className="lead fs-5">
                      Worked as a Quality Assurance Officer, which handled test
                      cases and oversees the quality of the system
                    </li>
                    <li className="lead fs-5">
                      Authored a comprehensive user manual for the newly
                      developed system, incorporating detailed instructions,
                      troubleshooting tips, and user scenarios– enhancing system
                      utilization and efficiency.
                    </li>
                  </ul>
                </li>
                <li className="list-group-item fs-4" style={{ fontFamily: "Geist" }}>
                  Pamana Plates (Mobile Development)
                  <ul className="list p-3" style={{ fontFamily: "Geist-ExtraLight" }}>
                    <li className="lead fs-5">
                      Worked as a Front-end Developer– designed and crafted the
                      User Interface for the Application
                    </li>
                    <li className="lead fs-5">
                      Used Kotlin and Android Studio for Mobile Development.
                    </li>
                  </ul>
                </li>
                <li className="list-group-item fs-4" style={{ fontFamily: "Geist" }}>
                  Blossom Buddy (Web Development)
                  <ul className="list p-3" style={{ fontFamily: "Geist-ExtraLight" }}>
                    <li className="lead fs-5">
                      Worked as a Front-end Developer
                    </li>
                    <li className="lead fs-5">
                      Focused on developing Responsive User Login Page.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MyProjects;
