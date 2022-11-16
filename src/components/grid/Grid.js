import { Container } from "./Grid.styled";
import { motion } from "framer-motion";
import { animation } from "../Animation";

const Grid = ({ data }) => {
  console.log(data);
  return (
    <Container>
      {data.map((item, index) => {
        return (
          <motion.div
            className="card"
            key={index}
            variants={animation.grid}
            initial="hidden"
            animate="show"
            exit="hide"
          >
            <div className="icon">
              <item.icon />
            </div>
            <p>{item.name}</p>
          </motion.div>
        );
      })}
    </Container>
  );
};

export default Grid;
