import React from "react";
import { Form, Button, Container } from "react-bootstrap";

function Contact() {
  return (
    <Container className="px-5 mx-4">
      <h1 className="abouts">Contact</h1>
      <h6>If you have any questions, feel free to reach out.</h6>
      <hr></hr>
      <ul>
    <li><strong><b>Gmail:</b></strong> <a href="https://myaccount.google.com/?hl=en&utm_source=OGB&utm_medium=act&pli=1" target="_blank" rel="noopener noreferrer">gillo.roberto003@gmail.com</a></li>
    <li><strong><b>GitHub:</b></strong> <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer">gillo.github.io</a></li>
    <li><strong><b>Facebook:</b></strong> <a href="https://web.facebook.com/roberto.r.gillo" target="_blank" rel="noopener noreferrer">Roberto Gillo</a></li>
    <li><strong><b>Tiktok:</b></strong> <a href="https://www.tiktok.com/@roberto.gillo" target="_blank" rel="noopener noreferrer">@roberto.gillo</a></li>
    <li><strong><b>Instagram:</b></strong> <a href="https://www.instagram.com/gillo.roberto/" target="_blank" rel="noopener noreferrer">roberto.gillo</a></li>
    <li><strong><b>Contact Number:</b></strong> 09369423126</li>
</ul>
    </Container>
  );
}

export default Contact;
