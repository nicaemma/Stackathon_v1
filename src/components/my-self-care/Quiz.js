import React, { useState } from "react";
import { Container, Card, Button, Alert } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
import "./MySelfCare.css";

const Quiz = () => {
  //   const navigate = useNavigate();

  const questions = [
    {
      questionText: "Which of these sounds best right now?",
      answerOptions: [
        { answerText: "Moving my body" },
        { answerText: "Getting thoughts out of my head" },
        { answerText: "Talking to someone who gets me" },
        { answerText: "Doing something creative" },
      ],
    },
    {
      questionText: "My deal morning routine is...",
      answerOptions: [
        { answerText: "Journaling" },
        { answerText: "A workout or walk" },
        { answerText: "Drinking a cup of coffee or tea" },
        { answerText: "10 minutes of quiet time" },
      ],
    },
    {
      questionText: "My top priority right now is...",
      answerOptions: [
        { answerText: "Feeling connected to others" },
        { answerText: "Achieving my goals" },
        { answerText: "My health and well being" },
        { answerText: "Making life more fun and enjoyable" },
      ],
    },
    {
      questionText: "A goal I'd like to achieve in the near future is...",
      answerOptions: [
        { answerText: "Being part of/contributing to my community" },
        { answerText: "Being kinder to myself" },
        { answerText: "Spending more time on my hobbies" },
        { answerText: "Furthing my education/personal growth" },
      ],
    },
    {
      questionText: "I feel the most motivated when...",
      answerOptions: [
        { answerText: "I finish a good workout" },
        { answerText: "I'm supported and encouraged by others" },
        { answerText: "I feel like I'm fulfilling my purpose in life" },
        { answerText: "I check something important off my to-do list" },
      ],
    },
    {
      questionText: "What I've been struggling with lately...",
      answerOptions: [
        { answerText: "Feeling overwhelmed" },
        { answerText: "Feeling disconnected from others" },
        { answerText: "Feeling disorganized" },
        { answerText: "Not knowing what direction I'm going in" },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showResult, setShowResult] = useState(false);

  const handleClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult("Quiz results");
    }
  };

  return (
    <>
      <div className="MySelfCare">
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div
            className="w-100"
            style={{ maxWidth: "400px", minHeight: "75vh" }}
          >
            {showResult ? (
              <Card>
                <Card.Body>
                  <div className="result-section">These are your results</div>
                </Card.Body>
              </Card>
            ) : (
              <Card>
                <Card.Body>
                  <div className="question-section">
                    <div className="question-count">
                      <span>Question {currentQuestion + 1}</span>/
                      {questions.length}
                    </div>
                    <div className="question-text">
                      {questions[currentQuestion].questionText}
                    </div>
                  </div>
                  <div className="answer-section">
                    {questions[currentQuestion].answerOptions.map((answer) => (
                      <div style={{ padding: "6px" }}>
                        <Button variant="outline-dark" onClick={handleClick}>
                          {answer.answerText}
                        </Button>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            )}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Quiz;
