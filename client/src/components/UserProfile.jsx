import React, { useState, useEffect} from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap'
// import { useHistory } from "react-router-dom";
import servicesIdeas from '../services/ideasServices'
import { useParams, useHistory } from "react-router-dom";


const UserProfile = () => {

    const servicioIdeas = new servicesIdeas();
    const { id } = useParams()
    const [user, setUser] =  useState({
        name:'',
        alias:'',
        email:''
    })
    const history = useHistory();

    const getUserfromService = async () => {
        console.log("Id:",id)
        try{
            const oneUser = await servicioIdeas.getOneSingleUser(id)
            console.log(oneUser)
            setUser(oneUser)
        }catch (err){
            return err;
        }
    }
    useEffect(() => {
        getUserfromService()
      }, []);

    return (
        <div>
            
            <Container>
                <Row>                    
                    <Col>
                        <Card style={{ width: '36rem' }}>
                            <Card.Header as="h5">Featured</Card.Header>
                            <Card.Body>
                                <Card.Title>Nombre: {user.name}</Card.Title>
                                <Card.Title>Alias: {user.alias}:</Card.Title>
                                <Card.Title>Email: {user.email}:</Card.Title>
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