import React from "react";
import logo from "../logo.svg";
import node from "../node.png";
import mongo from "../mongo.jpeg";
import html from "../html.png";
import js from "../js.png";
import { Container, Row } from "react-bootstrap";
export default function Skills() {
  const skill = [
    {
      title: "React js",
      name: logo,
      id: 1,
      desc:
        "React is an open-source front-end JavaScript library for building user interfaces or UI components"
    },
    {
      title: "Mongdb",
      name: mongo,
      id: 2,
      desc:
        "MongoDB is a  document-oriented database program. Classified as a NoSQL database program "
    },
    {
      title: "Nodejs",
      name: node,
      id: 3,
      desc:
        "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser "
    },
    {
      title: "CSS",
      name: html,
      id: 4,
      desc:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML"
    },
    {
      title: "Javascript",
      name: js,
      id: 5,
      desc:
        "Javascript is a programming language that conforms to the ECMAScript specification."
    }
  ];
  return (
    <div id="skills">
      <Container fluid>
        <h2 className="text-center pt-5 pb-5 ">
          <span className=" border-bottom border-danger border-5">
            My Skills
          </span>
        </h2>
        <Row>
          {skill.map(skill => (
            <div className="col text-center">
              <div style={{ width: "18rem", height: "30rem" }}>
                <img src={skill.name} class=" " alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{skill.title}</h5>
                  <p class="text-muted">{skill.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
}
