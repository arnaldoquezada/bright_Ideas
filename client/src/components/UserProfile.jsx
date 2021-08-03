import React from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap'



const UserProfile = () => {

    return (
        <div>
            
            <Container>
                <Row>                    
                    <Col>
                        <Card style={{ width: '36rem' }}>
                            <Card.Header as="h5">Featured</Card.Header>
                            <Card.Body>
                                <Card.Title>Nombre:</Card.Title>
                                <Card.Title>Alias:</Card.Title>
                                <Card.Title>Email:</Card.Title>
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