import React from "react";
import { Container, Row } from "react-bootstrap";
import { ExternalLink as External } from "react-external-link";
export default function Contacts() {
  const contact = [
    {
      id: 1,
      link: "https://twitter.com/whizcomp",
      icon: "bi bi-twitter",
      color: " cornflowerblue"
    },
    {
      id: 2,
      link: "mailto: ngenvic4@gmail.com",
      icon: "bi bi-envelope-fill",
      color: "tomato"
    },
    {
      id: 3,
      link: "https://www.linkedin.com/in/victor-kipkoech-391471172",
      icon: "bi bi-linkedin",
      color: " cornflowerblue"
    },
    {
      id: 4,
      link: "https://github.com/whizcomp",
      icon: "bi bi-github",
      color: ""
    },
    {
      id: 5,
      link: "https://wa.me/+254729356103",
      icon: "bi bi-whatsapp",
      color: " green"
    }
  ];
  return (
    <div style={{ backgroundColor: "#f8f8f8" }} id="contact">
      <Container className="p-3">
        <h3 className="text-center pt-5">Contact </h3>
        <Row>
          {contact.map(con => (
            <div className="col">
              <External href={con.link}>
                <i
                  className={con.icon}
                  style={{ fontSize: "2rem", color: con.color }}
                ></i>
              </External>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
}
