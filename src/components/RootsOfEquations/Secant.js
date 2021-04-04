import { useState, useEffect } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'

const Secant = () => {
    return (
        <div>
            <Container className="mt-5 p-4 rounded bg-light">
                <h2>Secant Method</h2>
                <Form>
                    <Form.Group as={Row} controlId="Equation">
                        <Form.Label column sm="2">
                            Equation :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                plaintext
                                readOnly
                                defaultValue="(x^2)-7"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="X1">
                        <Form.Label column sm="2">
                            X1 :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="number" placeholder="X1" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="X2">
                        <Form.Label column sm="2">
                            X2 :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="number" placeholder="X2" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="Error">
                        <Form.Label column sm="2">
                            Error :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="number"
                                placeholder="Error(optional)"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Calculate</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    )
}

export default Secant
