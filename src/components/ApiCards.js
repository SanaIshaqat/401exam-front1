import React, { Component } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

class ApiCards extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row xs={1} md={3} className="g-4">
                        {this.props.dataApi.map((obj) => {
                            return (
                                <Col >
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={obj.flowerImage} />
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text>
                                                {obj.flowerPrice}
                                            </Card.Text>
                                            <Button onClick={e => this.props.createFav(obj)} variant="primary">Add to Favorites</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                        }
                    </Row>
                </Container>

            </>
        )
    }
}

export default ApiCards
