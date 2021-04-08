import { useState } from 'react'
import { Container, Form, Button, Row, Col, Table } from 'react-bootstrap'
const axios = require('axios').default

const ConjugateGradient = () => {
    const [data, setData] = useState({
        a11: 14,
        a12: 4,
        a13: -16,
        a21: 4,
        a22: 29,
        a23: -19,
        a31: -16,
        a32: -19,
        a33: 27,
        b1: -22,
        b2: 35,
        b3: 5,
        x1: 0,
        x2: 0,
        x3: 0,
    })
    const [results, setResults] = useState(null)
    return (
        <div>
            <Container className="mt-5  p-4 rounded bg-light">
                <h2>Conjugate Gradient Method</h2>
                <Form>
                    <Form.Group as={Row} controlId="Equation">
                        <Form.Label column sm="2">
                            A :
                        </Form.Label>
                    </Form.Group>
                    <Form.Group as={Row} controlId="XL">
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder=""
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a11: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder=""
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a12: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder=""
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a13: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="XR">
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder=""
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a21: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder=""
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a22: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder=""
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a23: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="XR">
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder=""
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a31: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder=""
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a32: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder=""
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a33: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="B">
                        <Form.Label column sm="2">
                            B :
                        </Form.Label>
                    </Form.Group>
                    <Form.Group as={Row} controlId="XL">
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder=""
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        b1: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder=""
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        b2: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder=""
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        b3: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="B">
                        <Form.Label column sm="2">
                            X :
                        </Form.Label>
                    </Form.Group>
                    <Form.Group as={Row} controlId="XL">
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder=""
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        x1: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder=""
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        x2: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder=""
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        x3: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Button
                            block
                            type="button"
                            onClick={async () => {
                                const res = await axios.post(
                                    'http://localhost:8080/api/v1/root/conjugategradient',
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
                    </Form.Group>
                    {results !== null && (
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Iteration</th>
                                    <th>L</th>
                                    <th>X1</th>
                                    <th>X2</th>
                                    <th>X3</th>
                                    <th>R1</th>
                                    <th>R2</th>
                                    <th>R3</th>
                                    <th>Error</th>
                                    <th>A</th>
                                    <th>D1</th>
                                    <th>D2</th>
                                    <th>D3</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.map((r) => (
                                    <tr key={r.iteration}>
                                        <td>{r.iteration}</td>
                                        <td>{parseFloat(r.l.toFixed(5))}</td>
                                        <td>{parseFloat(r.x1.toFixed(5))}</td>
                                        <td>{parseFloat(r.x2.toFixed(5))}</td>
                                        <td>{parseFloat(r.x3.toFixed(5))}</td>
                                        <td>{parseFloat(r.r1.toFixed(5))}</td>
                                        <td>{parseFloat(r.r2.toFixed(5))}</td>
                                        <td>{parseFloat(r.r3.toFixed(5))}</td>
                                        <td>{r.err}</td>
                                        <td>{parseFloat(r.a1.toFixed(5))}</td>
                                        <td>{parseFloat(r.d1.toFixed(5))}</td>
                                        <td>{parseFloat(r.d2.toFixed(5))}</td>
                                        <td>{parseFloat(r.d3.toFixed(5))}</td>
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

export default ConjugateGradient
