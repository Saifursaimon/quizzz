import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import QuizBank from "../QuizBank/QuizBank";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Quiz = () => {
  const { data } = useLoaderData();
  //   console.log(data);
  const { name, questions } = data;
  const showAns = (ans) => {
    toast.success(`Correct Answer " ${ans} "`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleClick = (ans, correctAns) => {
    if (ans !== correctAns) {
      toast.warn("Wrong Answer", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success("Correct Answer", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div>
      <h1 className="text-center mt-5">Quiz Of {name}</h1>
      {questions.map((question) => (
        <QuizBank
          key={question.id}
          quiz={question}
          showAns={showAns}
          handleClick={handleClick}
        ></QuizBank>
      ))}
      <ToastContainer />
    </div>
  );
};

export default Quiz;
