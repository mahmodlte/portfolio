import React from "react";
import { Container, Image } from "react-bootstrap";
import "../../assets/style.css";
import TailwindIco from "../../assets/tailwindico.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
const Skills = () => {
  return (
    <Container className="skill">
      <h1 className="paragraph text-center pt-5">Tools&Technolgies I use</h1>
      <div className="row">
        <div className="rounded shadow-lg col my-5 mx-2">
          <h3 className="paragraph text-center col ">
            <FontAwesomeIcon
              className="mx-2"
              size="3x"
              icon={faHtml5}
              color="orange"
            ></FontAwesomeIcon>
            HTML
          </h3>
        </div>
        <div className="rounded shadow-lg col my-5 mx-2">
          <h3 className="paragraph text-center col">
            <FontAwesomeIcon
              className="mx-2"
              size="3x"
              icon={faCss3}
              color="blue"
            ></FontAwesomeIcon>
            CSS
          </h3>
        </div>
        <div className="rounded shadow-lg col my-5 mx-2">
          <h3 className="paragraph text-center ">
            <FontAwesomeIcon
              className="mx-2"
              size="3x"
              icon={faJs}
              color="orange"
            ></FontAwesomeIcon>
            javascript
          </h3>
        </div>
        <div className="rounded shadow-lg col my-5 mx-2">
          <h3 className="paragraph text-center  ">
            <FontAwesomeIcon
              className="mx-2"
              size="3x"
              icon={faReact}
              color="blue"
            ></FontAwesomeIcon>
            React
          </h3>
        </div>
        <div className="rounded shadow-lg col my-5 mx-2">
          <h3 className="paragraph text-center ">
            <FontAwesomeIcon
              className="mx-2"
              size="3x"
              icon={faBootstrap}
              color="purple"
            ></FontAwesomeIcon>
            Bootstrap
          </h3>
        </div>
        <div className="rounded shadow-lg col my-5 mx-2">
          <Image fluid src={TailwindIco} className="mx-auto d-block" />
          <h3 className="paragraph text-center ">Tailwind</h3>
        </div>
      </div>
    </Container>
  );
};
export default Skills;
