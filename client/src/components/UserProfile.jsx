import React, { useState } from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom";
import servicesIdeas from '../services/ideasServices'
import { useParams } from "react-router-dom";





const UserProfile = () => {

    const servicioIdeas = new servicesIdeas();
    const { id } = useParams()
    const [user, setUser] =  useState({})
    const history = useHistory();

    const getUserfromService = async () => {
        try{
            const oneUser = await servicioIdeas.getOneSingleUser(id)
            console.log(id)
            setUser(oneUser)
        }catch (err){
            return err;
        }
    }

    return (
        <div>
            
            <Container>
                <Row>                    
                    <Col>
                        <Card style={{ width: '36rem' }}>
                            <Card.Header as="h5">Featured</Card.Header>
                            <Card.Body>
                                <Card.Title>{user.name}:</Card.Title>
                                <Card.Title>{user.alias}:</Card.Title>
                                <Card.Title>{user.email}:</Card.Title>
                                <Card.Text>
                                    Total Number of Posts:                            
                                </Card.Text>
                                <Card.Text>
                                    Total Number of Likes:                                    
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>                    
                </Row>
            </Container>
           
        </div>

    )
}
export default UserProfile;