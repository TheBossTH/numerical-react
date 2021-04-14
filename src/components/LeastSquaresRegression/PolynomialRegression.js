import { useState } from 'react'
import { Container, Form, Button, Row, Col, Table } from 'react-bootstrap'
const axios = require('axios').default

const PolynomialRegression = () => {
    const [N, setN] = useState(0)
    const [order, setOrder] = useState(0)
    const [x, setX] = useState({})
    const [y, setY] = useState({})
    const [ans, setAns] = useState(null)
    return (
        <div>
            <Container className="mt-5  p-4 bg-dark text-white shadow">
                <h2>Polynomial Regression</h2>
                <Form>
                    <Form.Group as={Row} controlId="XL">
                        <Form.Label column sm="2">
                            N :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="number"
                                step="1"
                                placeholder="1-10"
                                onChange={(e) => {
                                    setN(parseInt(e.target.value))
                                }}
                                required
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="X">
                        <Form.Label column sm="2">
                            X :
                        </Form.Label>
                        {N > 0 &&
                            N <= 10 &&
                            Array.from(Array(N), (r, i) => (
                                <Col key={i}>
                                    <Form.Control
                                        type="number"
                                        step="1"
                                        placeholder={`x${i}`}
                                        id={`x${i}`}
                                        onChange={(e) => {
                                            setX({
                                                ...x,
                                                [e.target.id]: parseFloat(
                                                    e.target.value
                                                ),
                                            })
                                        }}
                                    />
                                </Col>
                            ))}
                    </Form.Group>
                    <Form.Group as={Row} controlId="Y">
                        <Form.Label column sm="2">
                            Y :
                        </Form.Label>
                        {N > 0 &&
                            N <= 10 &&
                            Array.from(Array(N), (r, i) => (
                                <Col key={i}>
                                    <Form.Control
                                        type="number"
                                        step="1"
                                        placeholder={`y${i}`}
                                        id={`y${i}`}
                                        onChange={(e) => {
                                            setY({
                                                ...y,
                                                [e.target.id]: parseFloat(
                                                    e.target.value
                                                ),
                                            })
                                        }}
                                    />
                                </Col>
                            ))}
                    </Form.Group>
                    <Form.Group as={Row} controlId="Prediction">
                        <Form.Label column sm="2">
                            Order :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="number"
                                onChange={(e) => {
                                    setOrder(parseInt(e.target.value))
                                }}
                                required
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Button
                            block
                            type="button"
                            onClick={async () => {
                                const res = await axios.post(
                                    'http://localhost:8080/api/v1/leastsquaresregression/polynomialregression',
                                    { x, y, order }
                                )
                                setAns(JSON.parse(res.request.response))
                            }}
                        >
                            Calculate
                        </Button>
                    </Form.Group>
                    {ans != null && (
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Equation</th>
                                    <th>Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{JSON.stringify(ans.data.string)}</td>
                                    <td>{JSON.stringify(ans.ans)}</td>
                                </tr>
                            </tbody>
                        </Table>
                    )}
                </Form>
            </Container>
        </div>
    )
}

export default PolynomialRegression
