import React, { useState } from 'react'
import { Container, Col, Row, Button, Form, Card } from 'react-bootstrap'
import '../styles/ideasStyles.scss'
import { FaThumbsUp } from 'react-icons/fa';
import { BsFillXCircleFill } from "react-icons/bs";
import IdeaServices from '../services/ideasServices'
import { Link } from "react-router-dom";
import IdeaService from '../services/ideasServices';

const PostIdeas = () => {

    const servicioIdeas = new IdeaService()

    const InitialState = {
      alias: "",
      texto: "",
      likes: [{ alias:'', numLikes:0 }],
    };

    const [idea , setIdea] = useState(InitialState)

    const crearNuevaIdea = async (e) => {
        try{
            const Newidea = await servicioIdeas.createNewIdea(idea);
        }catch (error){
            return error;
        }
    }
    
    const onSubmitHandler = (e) =>{
        e.preventDefault();
        crearNuevaIdea()
        
       
    }

    const handleChange = (e) => {
        console.log("TextBox valor: ",idea.texto , idea.likes.numLikes )
        setIdea({ ...idea, [e.target.name]: e.target.value })
    }

    return (
      <div>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <form onSubmit={onSubmitHandler} className="form-container">
                <Form.Control
                  as="textarea"
                  name="texto"
                  onChange={handleChange}
                  placeholder="Dejanos tu super idea"
                  style={{ height: "70px", width: "500px" }}
                />
                <Button type="submit" className="mb-2">
                  Tu idea!
                </Button>
              </form>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <div className="content">
              <Card style={{ width: "47rem" }} bg="light">
                <Card.Header>Arnaldo, Dijo: </Card.Header>
                <Card.Body>
                  <Card.Text>
                    El que nada hace nada teme, a buen entendedor mañana por la
                    mañana
                  </Card.Text>
                  <Card.Link>
                    <Button variant="primary">
                      <FaThumbsUp /> Like
                    </Button>
                  </Card.Link>
                  <Card.Link>
                    <small className="text-muted text-space">
                      <Link to="/detaills">
                        31 personas{" "}
                        <cite title="Source Title">Les gusta esto</cite>
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
          </Row>
        </Container>
      </div>
    );
}
export default PostIdeas;