import React from "react";
import pic from "../one.jpg";
import "../App.css";
import { Jumbotron, Container } from "react-bootstrap";
export default function Banner() {
  return (
    <div
      style={{
        borderBottom: "5px groove tomato",
        backgroundColor: "#E8E8E8"
      }}
      className="rounded-left"
      id="banner"
    >
      <Jumbotron fluid>
        <Container fluid>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 " style={{}}>
              <div className="p-5 justify-content-end">
                <h1 className=" display-3">Victor Kipkoech</h1>
                <h4 className="pt-3 pb-3">Fullstack software developer</h4>
                <h3 className="pt-3">
                  {" "}
                  I am a full stack passionate software developer who is
                  interested in javascript,React js,nodejs and building.By
                  building I mean behind a laptop not with a{" "}
                  <i
                    className="bi bi-hammer"
                    style={{ fontSize: "2rem" }}
                  ></i>{" "}
                  . Am also a problem solver.
                </h3>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-12 shadow-lg rounded-circle"
              style={{
                backgroundImage: `url(${pic}`,
                height: "500px",
                backgroundSize: "cover"
              }}
            ></div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
}
