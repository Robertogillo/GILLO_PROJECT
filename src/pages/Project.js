import React from "react";
import { Row, Col, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import webicodehelp from "../images/output.png";
import rfid from "../images/picture.png";
import "./Style.css";

function Project() {
  return (
    <Container className="px-sm-4 mx-sm-4">
      <Container fluid id="projects">
        <div className="container pt-4 box">
      <h1>Project</h1>
      <h4 className="mt-3">Below are some of the key projects I have contributed to</h4>
      <hr />
          <Row className="gap-2">
            <Col className="col-12 bg-black mt-5 overflow-hidden position-relative">
              <div className="p-1 text-white">
                <b>This sample website contains a collection of Haircut Styling.</b>
              </div>
              <div className="p-4 position-absolute top-15 start-15 custom-button-container btn btn-center">
                <button className="text-white btn btn-outline-success btn-dark custom-button">
                  <Nav.Link
                    as={NavLink}
                    to="https://robertogillo.github.io/gillo.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                    style={{ textDecoration: 'none' }}
                  >
                    Sample Website
                  </Nav.Link>
                </button>
              </div>
              <div className="project-image overflow-hidden text-center">
                <img
                  src={webicodehelp}
                  className="p-3 transform-images float-end p-5"
                  alt="Project"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '750px',
                    maxHeight: '30rem',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}
                />
              </div>
            </Col>

            <Col className="col-12 bg-black mt-4 overflow-hidden position-relative">
              <Nav.Link as={NavLink} to="/clinic-management-system" target="_blank" rel="noreferrer">
                <div className="p-1 text-white">
                    This system CPSU CLINIC was our capstone project. We developed this
                    system to automate the manual process of the Clinic in the University.
                </div>
                <div className="p-4 position-absolute top-10 start-0 custom-button-container btn btn-center">
                  <button className="text-white btn btn-outline-success btn-dark custom-button ">
                    CPSU Clinic Management System
                  </button>
                </div>
                <div className="project-image overflow-hidden">
                  <img
                    src={rfid}
                    className="transform-images float-end p-5"
                    alt=""
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '750px',
                      maxHeight: '30rem',
                      marginLeft: 'auto',
                      marginRight: 'auto'
                    }}
                  />
                </div>
              </Nav.Link>
            </Col>
          </Row>
        </div>
      </Container>

<<<<<<< HEAD
      <hr />
=======
          <div className="p-1 text-white">
            <b>This sample website contains a collection of Haircut Styling.</b>
          </div>
          <div className="project-image">
            <img
              src={webicodehelp}
              className="transform-image float-end p-5"
              alt="Haircut Styling"
            />
          </div>
        </Col>

        <Col className="col-12 bg-black mt-4 overflow-hidden position-relative">
          <div className="p-4 position-absolute top-25 start-25">
            <button className="mt-3 text-white fw-bold btn btn-outline-success btn btn-dark">
              CPSU Clinic Management System
            </button>
          </div>
          <div className="p-1 text-white">
            <b>
            This system CPSU CLINIC was our capstone project. We developed this
            system to automate the manual process of the Clinic in the University.
            </b>
          </div>
          <div className="project-image">
            <img
              src={rfid}
              className="transform-image float-end p-5"
              alt=""
            />
          </div>
        </Col>
        {/* <Col className="col-12 bg-black mt-4 overflow-hidden position-relative">
          <div className="p-5 position-absolute top-25 start-25">
            <h3 className="text-white fw-bold btn btn-outline-success btn btn-dark">
              <i>Personal Portfolio</i>
            </h3>
          </div>
          <div className="project-image">
            <img
              src={portfolio}
              className="transform-image float-end p-5"
              alt=""
            />
          </div>
        </Col> */}
      </Row>
              <hr></hr>
>>>>>>> 9474d540d9cbdc355f35046b7352638119c10f5a
    </Container>
  );
}

export default Project;
