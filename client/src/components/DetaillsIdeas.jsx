import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Table, Card } from 'react-bootstrap'
import { useParams, Link } from "react-router-dom";
import IdeaService from "../services/ideasServices";

import '../styles/detaillsStyles.scss'



const DetaillsIdeas = () => {

    const { id } = useParams()
    const servicioIdeas = new IdeaService();
    
    const [idea, setIdea] = useState({
        idea:'',
        alias:'',
        likes:[]
    })

    const getOneSingleIdea = async () => {
        try{
            const oneIdea = await servicioIdeas.getOneSingleIdea(id)
            setIdea(oneIdea)
        }catch(err){
            return err;
        }

    }
    useEffect(() => {
        getOneSingleIdea();
        
    },[])

    return (
        <div>
            <Container className="container-form fondo-back">
                <Row>
                    <div className="content">
                        {console.log("ideita",idea)}
                        <Card style={{ width: '35rem' }} bg="light">
                            <Card.Header>{idea.alias}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    { idea.texto }
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
                            {
                                idea.likes.length > 0 ? (
                                    idea.likes.map((p, idx) =>
                                    (
                                        <tr key={idx}>
                                            <td>
                                                <Link to={`/profile/detaills/${p._id}`}>
                                                    {p.alias}
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to={`/profile/detaills/${p._id}`}>
                                                    {p.name}
                                                </Link>
                                            </td>                                      
                                        </tr>
                                    ))
                                ) : 'No hay likes aún'
                            }                              
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