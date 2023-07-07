import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import QuizCard from "./QuizCard/QuizCard";

const Home = () => {
  const { data } = useLoaderData();
  //   console.log(data);
  return (
    <div>
      <Container className="mt-5">
        <Row xs={1} md={4} className="g-4">
          {data.map((topic) => (
            <QuizCard key={topic.id} topic={topic}></QuizCard>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
