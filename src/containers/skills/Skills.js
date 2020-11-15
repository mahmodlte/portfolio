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
  faNpm,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
const Skills = () => {
  return (
    <Container className="skill">
      <h1 className="paragraph text-center pt-5">Tools&Technolgies I use</h1>
      <div className="row">
        <div className="rounded shadow-lg col col-sm-3 col-lg-2 mt-3 mx-2">
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
        <div className="rounded shadow-lg col col-sm-3 col-lg-2 mt-3 mx-2">
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
        <div className="rounded shadow-lg col col-sm-3 col-lg-2 mt-3 mx-2">
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
        <div className="rounded shadow-lg col col-sm-3 col-lg-2 mt-3 mx-2">
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
        <div className="rounded shadow-lg col col-sm-3 col-lg-2 mt-3 mx-2">
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
        <div className="rounded shadow-lg col col-sm-3 col-lg-2 mt-3 mx-2">
          <Image
            style={{ width: 70, height: 70 }}
            src={TailwindIco}
            className="mx-auto d-block mt-3"
          />
          <h3 className="paragraph text-center ">Tailwind</h3>
        </div>
        <div className="rounded shadow-lg col col-sm-3 col-lg-2 mt-3 mx-2">
          <h3 className="paragraph text-center ">
            <FontAwesomeIcon
              className="mx-2"
              size="3x"
              icon={faNpm}
              color="orange"
            ></FontAwesomeIcon>
            NPM
          </h3>
        </div>
        <div className="rounded shadow-lg col col-sm-3 col-lg-2 mt-3 mx-2">
          <h3 className="paragraph text-center col-12 ">
            <FontAwesomeIcon
              className="mx-2 col-12"
              size="3x"
              icon={faGit}
              color="black"
            ></FontAwesomeIcon>
            Git
          </h3>
        </div>
      </div>
    </Container>
  );
};
export default Skills;
