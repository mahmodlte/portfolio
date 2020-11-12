import React from "react";
import { Container, Image } from "react-bootstrap";
import "../../assets/style.css";
import Typing from "react-typing-animation";
import avatar from "../../assets/avatar.jpg";
const Home = () => {
  return (
    <Container className="pt-5 pb-5 h-50 home">
      <div className=" w-auto row d-flex justify-content-center ">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <h1 className="paragraph text-center pt-3 ">
            Hi. there this is
            <span className="brand"> Mahmoud Mansour</span>
            <Typing>
              <h1 className="text-center">A Front-end web developer</h1>
            </Typing>
          </h1>
        </div>
        <div className="col col-lg-6 col-md-6">
          <Image src={avatar} alt="Mahmoud Mansour" fluid rounded width="450" />
        </div>
      </div>
    </Container>
  );
};
export default Home;
