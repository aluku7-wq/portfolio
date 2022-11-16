import { Container } from "./Skills.styled";
import Header from "../../components/header/Header";
import { skills } from "../../components/Data";
import Grid from "../../components/grid/Grid";

const Skill = () => {
  return (
    <Container>
      <div className="skills">
        <Header />
        <Grid data={skills} />
      </div>
    </Container>
  );
};

export default Skill;
