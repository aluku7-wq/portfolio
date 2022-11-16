import { Container } from "./Contact.styled";
import Header from "../../components/header/Header";
import { contacts } from "../../components/Data";
import { motion } from "framer-motion";
import { animation } from "../../components/Animation";

const Contact = () => {
  return (
    <Container>
      <div className="contact">
        <Header />
        <motion.div
          className="grid"
          variants={animation.grid}
          initial="hidden"
          animate="show"
          exit="hide"
        >
          {contacts.map((item, index) => {
            return (
              <div className="card" key={index}>
                <item.icon className="icon" />
                <p>{item.name}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </Container>
  );
};

export default Contact;
