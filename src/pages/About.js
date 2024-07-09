import React from "react";
import { Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import portfolio from "../images/lag.jpg";
import html from "../images/html.png";
import react from "../images/reacts.png";
import xampp from "../images/xamppp.png";
import css from "../images/css.png";
import bootstrap from "../images/bootstrap-icons.png";
import "./Style.css";

function About() {
  return (
    <Container fluid id="about">
      <Container className="px-4 px-md-5">
        <div className="intro">
          <h1 className="abouts ">About</h1>
          <h4 className="fw-bold">Hello! I am an aspiring future web developer</h4>
        </div>
        <hr />
        <br />

        <div className="row">
          <div className="col-md-6">
            <p className="del mt-5">
              Welcome to my personal web page! I have a strong background in web development and I'm currently pursuing a Bachelor's degree in Information Technology at Central Philippines State University. I'm passionate about problem-solving and discovering innovative solutions. As a web developer, I’m eager to apply my skills in a dynamic IT environment and contribute to impactful projects in the tech world.
            </p>
          </div>
          <div className="col-md-6">
            <div className="project-images text-center">
              <img
                src={portfolio}
                className="border rounded-4 transform-images"
                alt=""
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <h4 className="mt-3 fw-bold text-left">Do you want to know more about my skills? Here are some!</h4>
            <ul>
              <li><b>HTML & CSS:</b> Proficient in crafting well-structured, semantic HTML and styling with modern CSS techniques, including Flexbox and Grid</li>
              <li><b>JavaScript:</b> Experienced in using JavaScript to build interactive web applications, enhance user experience, and manipulate the DOM.</li>
              <li><b>PHP:</b> Skilled in server-side scripting with PHP to develop robust backend systems and manage database interactions</li>
              <li><b>Bootstrap:</b> Utilizing Bootstrap to quickly design and customize responsive websites with ease, ensuring compatibility across various devices and screen sizes.</li>
              <li><b>React.js:</b> Proficient in building component-based user interfaces with React.js, leveraging its powerful features for state management and performance optimization</li>
            </ul>
          </div>
          <div className="col-md-6">
            <div className="text-center">
              <h4 className="tech bg-dark text-light mt-3"><strong>Technology Stack</strong></h4>
              <div className="row">
                <div className="col-4">
                  <div className="project-images">
                    <img
                      src={html}
                      className="transform-imagess"
                      alt=""
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="project-images">
                    <img
                      src={react}
                      className="transform-img"
                      alt=""
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="project-images">
                    <img
                      src={xampp}
                      className="transform-img"
                      alt=""
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="project-images">
                    <img
                      src={css}
                      className="transform-img"
                      alt=""
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="project-images">
                    <img
                      src={bootstrap}
                      className="transform-img"
                      alt=""
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <h4 className="fw-bold text-left">Want to hire me as a tutor?</h4>
            <p className="text-left">Just visit my contact information provided for inquiries and other matters related to work.</p>
          </div>
          <div className="col-md-8">
            <h4 className="fw-bold text-left">Social Links</h4>
            <div className="text-left">
              <Nav.Link as={NavLink} to="https://web.facebook.com/roberto.r.gillo" target="_blank" rel="noopener noreferrer">
                <p className="bi bi-arrow-right text-black"> Facebook</p>
              </Nav.Link>
              <Nav.Link as={NavLink} to="https://myaccount.google.com/" target="_blank" rel="noopener noreferrer">
                <p className="bi bi-arrow-right text-black"> Gmail</p>
              </Nav.Link >
              <Nav.Link as={NavLink} to="https://www.instagram.com/gillo.roberto/" target="_blank" rel="noopener noreferrer">
                <p className="bi bi-arrow-right text-black"> Instagram</p>
              </Nav.Link >
              <Nav.Link as={NavLink} to= "https://www.tiktok.com/@roberto.gillo" target="_blank" rel="noopener noreferrer">
                <p className="bi bi-arrow-right text-black"> Tiktok</p>
              </Nav.Link >
              <Nav.Link as={NavLink} to= "https://github.com/dashboard" target="_blank" rel="noopener noreferrer">
                <p className="bi bi-arrow-right text-black"> GitHub</p>
              </Nav.Link >
            </div>
          </div>
        </div>

        <br />
        <div className="container border-top"></div>
      </Container>
    </Container>
  );
}

export default About;
