/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Row, Col, Card, Container, Nav,} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import webicodehelp from "../images/output.png";
import rfid from "../images/picture.png";
import homeImage from "../images/deve.jpg";
import "./Style.css";

function Home() {
  return (
    <Container fluid id="home">
<section className="px-3 mx-2">
  <Container className="box">
    <Row className="g-4 mb-5">
     
      <Col xs={12} md={6} className="order-xs-first mb-1 mt-5 mx-auto">
        <Card className="border-0">
          <Card.Body className="text-center">
            <img
              src={homeImage}
              className="border rounded-4 transform-images img-fluid"
              alt="Home"
            />
          </Card.Body>
        </Card>
      </Col>
      
      <Col xs={12} md={6} className="order-md-first mx-auto">
        <Card className="border-0 mb-4">
          <Card.Body className="mb-5">
            <Card.Title className="mt-5 text-center text-md-left">
              <h3 className="h3">
                <b>
                  Hello, I'm
                  <br />
                  Roberto R. Gillo
                </b>
              </h3>
              <p className="text-left fs-5 fw-light" style={{ textAlign: 'left' }}>
                <b className="text-black fw-bold"></b> Bachelor of Science
                in Information Technology <br />@Central Philippines
                State University
                <br /> Main Campus, Kabankalan City, Philippines
                <br /> S.Y. 2023-2024
              </p>

              <p className="fw-light fs-4 mt-1 text-justify mb-4">
                <br /> "Success is not final, failure is not fatal: It is the courage to continue that counts." – Winston Churchill
              </p>
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
</section>



      <section>
        <Container fluid id="projects">
          <div className="container pt-4 box">
            <Row>
              <Col>
                <h6 className="fs-10 bold-500 mt-auto">Recent<br></br> Projects</h6>
              </Col>
              <Col className="d-flex justify-content-center align-items-center ">
                <Nav.Link as={NavLink} 
                  to="/project"
                  className="btn bg-white btn-xl text-lg fs-5 py-3 px-5 shadow"
                >
                  <i className="bi bi-arrow-up-right-square"></i><b> View All</b>
                </Nav.Link>
              </Col>
            </Row>
            <Row className="gap-1">
              <Col className="col-12 bg-black mt-5 overflow-hidden position-relative">
                <div className="p-4 position-absolute top-15 start-15">
                  <button className="text-white fw-bold btn btn-outline-success btn-dark">
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
                  <div className="p-4 position-absolute top-25 start-25">
                    <button className="text-white fw-bold btn btn-outline-success btn btn-dark">
                      CPSU Clinic Management System
                    </button>
                  </div>
                  <div className="project-image overflow-hidden">
                    <img
                      src={rfid}
                      className="transform-images float-end p-5"
                      alt="" style={{
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
      </section>
      <hr></hr>
    </Container>
  );
}

export default Home;
