import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button, Form, Card } from "react-bootstrap";
import "../styles/ideasStyles.scss";
import { FaThumbsUp } from "react-icons/fa";
import { BsFillXCircleFill, BsFillBrightnessHighFill } from "react-icons/bs";
import IdeaServices from "../services/ideasServices";
import { Link, useParams} from "react-router-dom";
import IdeaService from "../services/ideasServices";
import Swal from 'sweetalert2'



const PostIdeas = () => {

  const servicioIdeas = new IdeaService();
  const { id } = useParams()

  const InitialState = {
    alias: "",
    texto: "",
    likes:[]
  };

  //En este state recibiremos todos las ideas desde la base de datos para luego mostrarlas
  const [misIdeas, setMisIdeas] = useState([]);

  //Aqui usaremos este state para crear las ideas y dejarlas en la base de datos
  const [idea, setIdea] = useState({InitialState});

  //Función que crea una nueva idea en la base de datos
  const crearNuevaIdea = async (e) => {
    try {
      const Newidea = await servicioIdeas.createNewIdea(idea);
      traerTodasLasIdeas();
      setIdea({ ...idea, texto: "" }); 
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Que buena idea!!!',
        showConfirmButton: false,
        timer: 1500
      })
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

  const addLike = () => {
  
}
const eliminarIdea = async (idx) => {
  console.log(idx)
  
  try{  
    const deleteIdea = servicioIdeas.deleteIdea(idx)
      traerTodasLasIdeas()
    }catch(err){
      return err;
    }
    console.log("resultado eliminar", eliminarIdea)
}


  const onSubmitHandler = (e) => {
    e.preventDefault();
    crearNuevaIdea();    
  };

  const handleChange = (e) => {
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
                required
                minLength="10"
                as="textarea"
                name="texto"
                onChange={handleChange}
                value={idea.texto}
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
          {misIdeas.length > 0
            ? misIdeas.map((ideas, idx) => (
             
                <div className="content" key="idx">
                  <Card style={{ width: "35rem" }} bg="light">
                    <Card.Header>{ ideas.alias }, Dijo: </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        <Link to={`/idea/detaills/${ideas._id}`}>
                          <p>{ideas.texto}</p> 
                        </Link>
                        </Card.Text>
                      <Card.Link>
                        <Button variant="primary"
                          onClick={()=>addLike()}
                        >
                        
                          <FaThumbsUp /> Like
                        </Button>
                      </Card.Link>
                      <Card.Link>
                        <small className="text-muted text-space">
                          <Link to="/detaills">
                          {ideas.likes.length} personas
                            <cite title="Source Title"> Les gusta esto</cite>
                          </Link>
                        </small>
                      </Card.Link>
                      <Card.Link>
                        <Button variant="danger"
                          onClick={() => {eliminarIdea(ideas._id)}}
                        >
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
