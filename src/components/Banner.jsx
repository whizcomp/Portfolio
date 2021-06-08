import React from "react";
import pic from "../one.jpg";
import { Jumbotron, Container } from "react-bootstrap";
export default function Banner() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <div className="p-5 justify-content-end">
                <h1 className=" display-3">Victor Kipkoech</h1>
                <h4>Fullstack software developer</h4>
                <p className="pt-3">
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Itaque iusto quae praesentium, nam nemo quam fugiat debitis a,
                  inventore culpa laborum necessitatibus aut sequi ab?
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-12"
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
