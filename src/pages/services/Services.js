import { Container } from "./Services.styled";
import Header from "../../components/header/Header";
import { services } from "../../components/Data";
import Grid from "../../components/grid/Grid";

const Services = () => {
  return (
    <Container>
      <div className="services">
        <Header />
        <Grid data={services} />
      </div>
    </Container>
  );
};

export default Services;
