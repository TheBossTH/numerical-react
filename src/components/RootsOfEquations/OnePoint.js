import { useState, useEffect } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'

const Onepoint = () => {
    return (
        <div>
            <Container className="mt-5 p-4 rounded bg-light">
                <h2>One-Point Iteration Method</h2>
                <Form>
                    <Form.Group as={Row} controlId="Equation">
                        <Form.Label column sm="2">
                            Equation :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                plaintext
                                readOnly
                                defaultValue="(x^4)-13"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="XStart">
                        <Form.Label column sm="2">
                            X Start :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="number" placeholder="X Start" />
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

export default Onepoint
