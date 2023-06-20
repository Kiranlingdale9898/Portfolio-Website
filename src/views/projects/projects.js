/* eslint-disable no-unused-vars */
import React from "react";
import { Timeline, Events, UrlButton, ImageEvent, createTheme, themes } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image";

//Css file
import './project.css'

//Projects 
import ChatKharaMeal from "../../assets/img/projects/christin-hume-hBuwVLcYTnA-unsplash.jpg";
import ExpenseTracker from "../../assets/img/projects/vadim-bozhko-lbO1iCnbTW0-unsplash.jpg";


//Skills
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_React from "../../assets/img/skills/react.svg";
import L_Mui from "../../assets/img/skills/material-ui-1.svg";




// Custom timline theme
const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: '#efefef',
  },
  date: {
    backgroundColor: '#ec4b4f',
  },
  marker: {
    borderColor: '#070d59',
  },
  timelineTrack: {
    backgroundColor: '#ec4b4f',
  },
});

const ProjectTimeline = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">Work Experience</h1>
      <Timeline theme={customTheme}>
        <Events>
          {/* //ChatKharaMeal */}
          <ImageEvent
            date="Oct, 2021 - Dec 2021"
            className="text-center"
            text="Internship Experience"
            src={ChatKharaMeal}
            alt="Chatkhara meal"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      WORK DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong><br></br>
                         During my internship, I gained experience in designing and developing web pages using React.js, HTML, CSS, and JavaScript. I worked on various projects, creating dynamic interfaces and incorporating interactivity. Collaborating with experienced developers, I learned best practices and improved my skills.
                        <hr />
                        <strong>Tech used:</strong>
                        <br></br>
                        <br></br>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_React}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </ImageEvent>

          

          <ImageEvent
            date="28th Dec, 2021"
            className="text-center"
            text="Full Time Job Experience"
            src={ExpenseTracker}
            alt="ExpenseTracker"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      WORK DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong><br></br> 
                        With 1.5 years of experience, I am skilled in designing and developing user-facing applications using HTML, CSS, JavaScript, and React JS. I collaborate with the engineering team, contributing to project delivery, wireframing, and task distribution. I implement business logic and take ownership of end-to-end application development as an individual contributor and team player.<br></br><br></br>
                         My goal is to consistently deliver high-quality applications that meet the desired functionality. I am adaptable, prioritize tasks effectively, and thrive in a fast-paced environment. Ready to contribute my expertise to new challenges in web development and the React JS ecosystem.
                        <hr />
                        <strong>Tech used:</strong>
                        <br></br>
                        <br></br>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Mui}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Material UI
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_React}
                                alt="Firebase"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP}
                                alt="bootstrap"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  )
}


export default ProjectTimeline