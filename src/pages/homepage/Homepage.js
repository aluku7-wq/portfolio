import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import { Container } from "./Homepage.styled";
import { motion } from "framer-motion";
import { animation } from "../../components/Animation";

export const Homepage = () => {
  return (
    <Container>
      <motion.div
        variants={animation.general}
        initial="hidden"
        animate="show"
        exit="hide"
        className="homepage"
        style={{ backgroundImage: `url("./images/background/bg.png")` }}
      >
        <div className="overlay">
          <Header />
          <div className="hero">
            <h2>click the sections to discover more about me</h2>

            <motion.div className="options" variants={animation.options}>
              <Link to="/projects">projects</Link>
              <Link to="/skills">skills</Link>
              <Link to="/services">services</Link>
              <Link to="/contacts">contacts</Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};
