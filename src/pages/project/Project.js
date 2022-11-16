import { useParams } from "react-router-dom";
import { Container } from "./Project.styled";
import { projects } from "../../components/Data";
import Header from "../../components/header/Header";

const Project = () => {
  const { id } = useParams();
  const projectdata = projects.find(
    (item) => parseInt(item.id) === parseInt(id)
  );
  console.log(projectdata);
  return (
    <Container>
      <div className="project">
        <Header />
        <div className="projecthome">
          <div className="text">
            <h4>{projectdata.name}</h4>
            <div className="buttons">
              <a
                href="https://github.com/aluku7-wq/gym"
                target="_blank"
                rel="noopener noreferrer"
              >
                source code
              </a>
              <a
                href="https://alukugym.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                visit site
              </a>
            </div>
            <div className="description">
              <h4>description:</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veniam, laboriosam soluta. Dolore, hic. Maxime non rem
                doloremque modi exercitationem, ipsum libero atque asperiores
                deserunt quod sed id qui dolores obcaecati.
              </p>
            </div>
          </div>
          <img src={`../images/projects/${projectdata.image}`} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Project;
