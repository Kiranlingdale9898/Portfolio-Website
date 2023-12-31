import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";
import Profile from "../../assets/img/profile/About-Me.png";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-2">ABOUT ME</h1>
        <Container>
          <Row className=" pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded tex align-text-left " >
                <br />Hello! My name is Kiran Lingdale and I enjoy creating things that live on the internet. I'm a passionate Developer, with strong administrative and communication skills, good attention to detail, and the ability to write efficient code using React.js and other front-end tools
                <br /><br/>
                My interest in web development started in college when I was trying to edit things on the web, which taught me a lot about HTML & CSS.
                As I grow and flourish as a Developer, one thing which keeps me going is my inquisitiveness for discovering new things every day
                <br />
                <br />
                Fast Forwarding to today, I worked as an intern for 3 months and currently working as a full-time employee as a full-stack developer. Learned a great deal about teamwork, leadership, and communication after months of rigorous work. 
                <br />
                <br />
                I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                 
              
                  <div>
                    <a href="https://github.com/Kiranlingdale9898" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/kiran-lingdale-648496203/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;