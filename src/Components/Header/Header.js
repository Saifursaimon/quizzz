import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
const Header = () => {
  const links = [
    {
      display: "Home",
      path: "/",
    },
    {
      display: "Statistics",
      path: "/statistics",
    },
    {
      display: "Blog",
      path: "/blog",
    },
  ];
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <h2 className="text-primary">
              <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon> Quizzz
            </h2>
          </Navbar.Brand>
          <Nav>
            {links.map((link) => (
              <Link
                to={link.path}
                className="text-decoration-none me-5 fw-bolder "
              >
                {link.display}
              </Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
