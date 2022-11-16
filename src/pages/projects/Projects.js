import { Container } from "./Projects.styled";
import Header from "../../components/header/Header";
import { projects } from "../../components/Data";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";
import { animation } from "../../components/Animation";

const Projects = () => {
  return (
    <Container>
      <motion.div
        className="projects"
        variants={animation.general}
        initial="hidden"
        animate="show"
        exit="hide"
      >
        <Header />
        <div className="title">
          <h4>
            click on the project to access the source code or link to the
            project
          </h4>
          <Link to="/">
            <MdOutlineClose className="icon" />
          </Link>
        </div>

        <motion.div className="grid" variants={animation.grid}>
          {projects.map((item, index) => {
            return (
              <Link to={`/project/${item.id}`} className="card" key={index}>
                <img src={`./images/projects/${item.image}`} alt="" />
                <p>{item.name}</p>
              </Link>
            );
          })}
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Projects;
