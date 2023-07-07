import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const QuizCard = ({ topic }) => {
  const { id, name, logo } = topic;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={logo} />
          <Card.Body className="d-flex justify-content-between align-items-center">
            <Card.Title>
              <h4>{name}</h4>
            </Card.Title>
            <Link to={`/${id}`}>
              <Button>
                Start {"  "}
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default QuizCard;
