import { useState } from 'react'
import { Container, Form, Button, Row, Col, Table } from 'react-bootstrap'
const axios = require('axios').default

const Gaussseidel = () => {
    const [data, setData] = useState({
        a11: 0,
        a12: 0,
        a13: 0,
        a21: 0,
        a22: 0,
        a23: 0,
        a31: 0,
        a32: 0,
        a33: 0,
        b1: 0,
        b2: 0,
        b3: 0,
    })
    const [results, setResults] = useState(null)
    return (
        <div>
            <Container className="mt-5  p-4 bg-dark text-white shadow">
                <h2>Gauss-seidel</h2>
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
                                    'http://localhost:8080/api/v1/root/gaussseidel',
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
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Iteration</th>
                                    <th>X1</th>
                                    <th>X2</th>
                                    <th>X3</th>
                                    <th>ErrorX1</th>
                                    <th>ErrorX2</th>
                                    <th>ErrorX3</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.map((r) => (
                                    <tr key={r.iteration}>
                                        <td>{r.iteration}</td>
                                        <td>{r.x1}</td>
                                        <td>{r.x2}</td>
                                        <td>{r.x3}</td>
                                        <td>{r.erx1}</td>
                                        <td>{r.erx2}</td>
                                        <td>{r.erx3}</td>
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

export default Gaussseidel
