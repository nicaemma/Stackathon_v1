// import React, { useState } from "react";
// import { Container, Card, Button, Alert } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
import "./MySelfCare.css";
import { addDoc, collection } from "firebase/firestore";

import React, { useRef, useState } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
// import "../user-auth/SignIn.css";
import { db } from "../../firebase";

const AddCopingSkill = () => {
  //   const navigate = useNavigate();
  //   const nameRef = useRef();
  //   const explanationRef = useRef();
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [benefits, setBenefits] = useState("");
  const [obstacles, setObstacles] = useState(null);

  const { currentUser } = useAuth();

  //   const { signUp, editProfile } = useAuth();
  //   const [error, setError] = useState("");
  //   const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //   async function handleAdd(e) {
  //     e.preventDefault();
  //     await setDoc(doc(db, "cities", "LA"), {
  //       name: "Los Angeles",
  //       state: "CA",
  //     });
  //   }

  const skillsCollectionRef = collection(db, "skills");

  const createSkill = async (e) => {
    e.preventDefault();
    try {
      await addDoc(skillsCollectionRef, {
        description: description,
        category: category,
        benefits: benefits,
        obstacles: obstacles,
        author: { name: currentUser.displayName, id: currentUser.uid },
      });
      //   console.log("description --> ", description);
      navigate("/my-coping-skills");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="MySelfCare">
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh", opacity: "0.95" }}
        >
          <div className="w-100" style={{ maxWidth: "600px" }}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Add a Stress-Reliever</h2>
                {/* {error && <Alert variant="danger">{error}</Alert>} */}
                <Form style={{ fontSize: "20px" }} onSubmit={createSkill}>
                  <Form.Group id="name">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="description"
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Select
                      className="form-select"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option>Select below</option>
                      <option value="fitness">Fitness</option>
                      <option value="activity">Activity</option>
                      <option value="social">Social</option>
                      <option value="other">Other</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group id="benefits">
                    <Form.Label>This helps me with:</Form.Label>
                    <Form.Control
                      type="benefits"
                      onChange={(e) => setBenefits(e.target.value)}
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group id="obstacles">
                    <Form.Label>
                      Optional: What may prevent you from doing this?
                    </Form.Label>
                    <Form.Control
                      type="obstacles"
                      onChange={(e) => setObstacles(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Button
                    // disabled={loading}
                    className="w-90"
                    variant="success"
                    type="submit"
                  >
                    Add to my List!
                  </Button>
                </Form>
                <div className="w-100 text-center mt-2">
                  <Card.Body>
                    <Link to="/my-coping-skills">Back to My List</Link>
                  </Card.Body>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AddCopingSkill;
