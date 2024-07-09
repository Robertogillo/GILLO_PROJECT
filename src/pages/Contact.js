import React from "react";
import { Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Contact() {
  return (
    <Container className="px-lg-5 mx-lg-4">
      <h1 className="abouts">Contact</h1>

      <h5>If you have any questions, feel free to reach out.</h5>
      <hr />
      <ul className="text-left">
        <li>
          <strong><b>Gmail:</b></strong> 
          <Nav.Link as={NavLink} to="mailto:gillo.roberto003@gmail.com" target="_blank" rel="noopener noreferrer">
            gillo.roberto003@gmail.com
          </Nav.Link>
        </li>
        <li>
          <strong><b>GitHub:</b></strong> 
          <Nav.Link as={NavLink} to="https://github.com/dashboard" target="_blank" rel="noopener noreferrer">
            gillo.github.io
          </Nav.Link>
        </li>
        <li>
          <strong><b>Facebook:</b></strong> 
          <Nav.Link as={NavLink} to="https://web.facebook.com/roberto.r.gillo" target="_blank" rel="noopener noreferrer">
            Roberto Gillo
          </Nav.Link>
        </li>
        <li>
          <strong><b>Tiktok:</b></strong> 
          <Nav.Link as={NavLink} to="https://www.tiktok.com/@roberto.gillo" target="_blank" rel="noopener noreferrer">
            @roberto.gillo
          </Nav.Link>
        </li>
        <li>
          <strong><b>Instagram:</b></strong> 
          <Nav.Link as={NavLink} to="https://www.instagram.com/gillo.roberto/" target="_blank" rel="noopener noreferrer">
            roberto.gillo
          </Nav.Link>
        </li>
        <li><strong><b>Contact Number:</b></strong> 09369423126</li>
      </ul>
      <hr />
      <br />
    </Container>
  );
}

export default Contact;
