import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button, Form, Card } from "react-bootstrap";
import "../styles/ideasStyles.scss";
import { FaThumbsUp } from "react-icons/fa";

import { BsFillXCircleFill, BsFillBrightnessHighFill } from "react-icons/bs";
import IdeaServices from "../services/ideasServices";
import { Link } from "react-router-dom";
import IdeaService from "../services/ideasServices";

const PostIdeas = () => {

  const servicioIdeas = new IdeaService();

  const InitialState = {
    alias: "",
    texto: "",
    likes: [{ alias: "", numLikes: 0 }],
  };

  //En este state recibiremos todos las ideas desde la base de datos para luego mostrarlas
  const [misIdeas, setMisIdeas] = useState([]);

  //Aqui usaremos este state para crear las ideas y dejarlas en la base de datos
  const [idea, setIdea] = useState(InitialState);

  //Función que crea una nueva idea en la base de datos
  const crearNuevaIdea = async (e) => {
    try {
      const Newidea = await servicioIdeas.createNewIdea(idea);
    } catch (error) {
      return error;
    }
  };

  //Función que trae todas las ideas desde la base de datos
  const traerTodasLasIdeas = async (e) => {
    try {
      const todasMisIdeas = await servicioIdeas.getAllIdeas();
      setMisIdeas(todasMisIdeas);
    } catch (error) {
      return error;
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    crearNuevaIdea();
    traerTodasLasIdeas();
  };

  const handleChange = (e) => {
    console.log("TextBox valor: ", idea.texto, idea.likes.numLikes);
    setIdea({ ...idea, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    traerTodasLasIdeas();
  }, []);

  return (
    <div>
      <Container className="fondo" >
        <Row>
          <Col></Col>
          <Col>
            <form onSubmit={onSubmitHandler} className="form-container">
              <Form.Control
                as="textarea"
                name="texto"
                onChange={handleChange}
                placeholder="Dejanos tu super idea"
                style={{ height: "60px", width: "500px" }}
              />
              <Button type="submit" className="mb-2">
                <BsFillBrightnessHighFill />
                Tu idea!              
              </Button>
            </form>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          {console.log("Esto llego del servicio",misIdeas)}
          {misIdeas.length > 0
            ? misIdeas.map((ideas, idx) => (
             
                <div className="content" key="idx">
                  <Card style={{ width: "35rem" }} bg="light">
                    <Card.Header>Arnaldo, Dijo: </Card.Header>
                    <Card.Body>
                      <Card.Text>{ideas.texto}</Card.Text>
                      <Card.Link>
                        <Button variant="primary">
                          <FaThumbsUp /> Like
                        </Button>
                      </Card.Link>
                      <Card.Link>
                        <small className="text-muted text-space">
                          <Link to="/detaills">
                          {ideas.likes[0].numLikes} personas
                            <cite title="Source Title"> Les gusta esto</cite>
                          </Link>
                        </small>
                      </Card.Link>
                      <Card.Link>
                        <Button variant="danger">
                          <BsFillXCircleFill /> Eliminar
                        </Button>
                      </Card.Link>
                    </Card.Body>
                  </Card>
                </div>
              ))
            : "Sin ideas aún"}
        </Row>
      </Container>
    </div>
  );
};
export default PostIdeas;
