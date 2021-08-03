import React from 'react'
import { Container, Col, Row, Table, Card } from 'react-bootstrap'
import { Link } from "react-router-dom";


import '../styles/detaillsStyles.scss'



const DetaillsIdeas = () => {

    return (
        <div>
            <Container className="container-form">
                <Row>
                    <div className="content">
                        <Card style={{ width: '47rem' }} bg="light">
                            <Card.Header>Arnaldo, Dijo: </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    El que nada hace nada teme, a buen entendedor mañana por la mañana
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
                <Row>                   
                    <Col className="table-wrap">
                        <h3>Personas a quienes les gusta esta idea:</h3>                   
                        <Table striped bordered hover responsive="sm">
                            <thead>
                                <tr>                                
                                    <th>Alias</th>
                                    <th>Nombre</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>                                
                                    <td>
                                        <Link to="profile">
                                            Pepito
                                        </Link>
                                    </td>
                                    <td>Otto</td>                               
                                </tr>                            
                            </tbody>
                        </Table>   
                    </Col>
                        <Col>
                        </Col>                                   
                </Row>
            </Container>
        </div>
    )
}
export default DetaillsIdeas;