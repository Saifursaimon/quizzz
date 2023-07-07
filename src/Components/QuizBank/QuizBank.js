import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Container } from "react-bootstrap";

const QuizBank = ({ quiz, showAns, handleClick }) => {
  console.log(quiz);
  const { question, options, correctAnswer } = quiz;

  return (
    <div>
      <Container>
        <Card className="m-5 bg-danger-subtle">
          <Card.Body>
            <Card.Title>
              {question}{" "}
              <FontAwesomeIcon
                onClick={() => {
                  showAns(correctAnswer);
                }}
                icon={faEye}
              ></FontAwesomeIcon>
            </Card.Title>
            <Card.Text>
              {options.map((option) => (
                <div className="form-check mt-4">
                  <input
                    className="form-check-input me-4"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onClick={() => {
                      handleClick(option, correctAnswer);
                    }}
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    {option}
                  </label>
                </div>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default QuizBank;
