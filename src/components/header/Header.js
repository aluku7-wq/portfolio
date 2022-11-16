import { Container } from "./Header.styled";
import { AiOutlineGithub, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <Container>
      <div className="logo">
        <Link to="/" className={location.pathname === "/" ? "home_h1" : "h1"}>
          <img
            src={
              location.pathname === "/"
                ? `./images/logo/1.png`
                : `./images/logo/2.png`
            }
            alt=""
          />
          luku
        </Link>
      </div>
      <div className={location.pathname === "/" ? "home_links" : "links"}>
        <a href="https://github.com/aluku7-wq/aluku7-wq">
          <AiOutlineGithub />
        </a>
        <a href="https://github.com/aluku7-wq/aluku7-wq">
          <BsFacebook />
        </a>
        <a href="https://github.com/aluku7-wq/aluku7-wq">
          <AiFillTwitterCircle />
        </a>
      </div>
    </Container>
  );
};

export default Header;
