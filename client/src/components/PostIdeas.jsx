import React from 'react'
import { Container, Col, Row, Button, Form, Card, CardDeck } from 'react-bootstrap'
import '../styles/ideasStyles.scss'
import { FaThumbsUp } from 'react-icons/fa';
import { BsFillXCircleFill } from "react-icons/bs";



const PostIdeas = () => {

    return (
        <div>
            <Container>
               
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <Form className="form-container">
                            <Form.Control
                                as="textarea"
                                placeholder="Dejanos tu super idea"
                                style={{ height: '70px', width: '500px' }}
                            />
                            <Button type="submit" className="mb-2">
                                Tu idea!
                            </Button>
                        </Form>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <div className="content">
                        <Card style={{ width: '47rem' }} bg="light">
                            <Card.Header>Arnaldo, Dijo: </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    El que nada hace nada teme, a buen entendedor mañana por la mañana
                                </Card.Text>
                                <Card.Link>
                                    <Button variant="primary">
                                        <FaThumbsUp /> Like
                                    </Button>
                                </Card.Link>
                                <Card.Link>
                                    <small className="text-muted text-space">
                                        31 personas <cite title="Source Title">Les gusta esto</cite>
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
    )
}
export default PostIdeas;