import "./MySelfCare.css";
import { collection, getDocs } from "firebase/firestore";
import React, { useRef, useState, useEffect } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

// Add auth of user's specific skills

import { db } from "../../firebase";

const CopingSkills = () => {
  const [skills, setSkills] = useState([]);
  const skillsCollectionRef = collection(db, "skills");

  useEffect(() => {
    const getSkills = async () => {
      const data = await getDocs(skillsCollectionRef);
      setSkills(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getSkills();
  }, []);

  return (
    <>
      <div className="MySelfCare">
        <Container
          style={{
            minHeight: "100vh",
            maxWidth: "700px",
          }}
        >
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">My Stress Relievers</h2>
            </Card.Body>
            {skills.map((skill) => (
              <Card>
                <Card.Body
                  style={{ backgroundColor: "AliceBlue", fontSize: "20px" }}
                >
                  <div>
                    <div style={{ fontWeight: "bold", fontSize: "25px" }}>
                      {skill.description}
                    </div>

                    <div>
                      <span style={{ fontWeight: "bold" }}>Category: </span>
                      <span>{skill.category}</span>
                    </div>
                    <div>
                      <span style={{ fontWeight: "bold" }}>Helps with: </span>
                      <span>{skill.benefits}</span>
                    </div>
                    {skill.obstacles && (
                      <div>
                        <span style={{ fontWeight: "bold" }}>Obstacles: </span>
                        <span>{skill.obstacles}</span>
                      </div>
                    )}
                  </div>
                </Card.Body>
              </Card>
            ))}
            <Card.Body>
              <div className="w-100 text-center mt-2">
                <Link to="/my-coping-skills/add">
                  <Button variant="outline-success">Add another one!</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default CopingSkills;
