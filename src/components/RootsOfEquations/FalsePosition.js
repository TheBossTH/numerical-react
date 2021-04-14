import { useState } from 'react'
import { Container, Form, Button, Row, Col, Table } from 'react-bootstrap'
const axios = require('axios').default

const FalsePosition = () => {
    const [data, setData] = useState({
        xl: 0,
        xr: 0,
        eq: '(x^4)-13',
        error: 0.00001,
    })
    const [results, setResults] = useState(null)
    return (
        <div>
            <Container className="mt-5 p-4 bg-dark text-white shadow">
                <h2>False-Position Method</h2>
                <Form>
                    <Form.Group as={Row} controlId="Equation">
                        <Form.Label column sm="2">
                            Equation :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="text"
                                placeholder="(x^4)-13"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        eq: e.target.value,
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="XL">
                        <Form.Label column sm="2">
                            XL :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="number"
                                placeholder="XL"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        xl: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="XR">
                        <Form.Label column sm="2">
                            XR :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="number"
                                placeholder="XR"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        xr: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="Error">
                        <Form.Label column sm="2">
                            Error :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="number"
                                placeholder="Error"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        error: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button
                                type="button"
                                onClick={async () => {
                                    const res = await axios.post(
                                        'http://localhost:8080/api/v1/root/falseposition',
                                        data
                                    )
                                    console.log(res)
                                    setResults(
                                        JSON.parse(res.request.response).data
                                    )
                                }}
                            >
                                Calculate
                            </Button>
                        </Col>
                    </Form.Group>
                    {results !== null && (
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Iteration</th>
                                    <th>XL</th>
                                    <th>XR</th>
                                    <th>X1</th>
                                    <th>ER</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.map((r) => (
                                    <tr key={r.iteration}>
                                        <td>{r.iteration}</td>
                                        <td>{r.xl}</td>
                                        <td>{r.xr}</td>
                                        <td>{r.x1}</td>
                                        <td>{r.er}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                </Form>
            </Container>
        </div>
    )
}

export default FalsePosition
