import { useState } from 'react'
import { Container, Form, Button, Row, Col, Table } from 'react-bootstrap'
const axios = require('axios').default

const Lagrangepolynomials = () => {
    const [N, setN] = useState(1)
    const [fx, setFx] = useState(1)
    const [x, setX] = useState({})
    const [y, setY] = useState({})
    const [ans, setAns] = useState(null)
    return (
        <div>
            <Container className="mt-5  p-4 bg-dark text-white shadow">
                <h2>Lagrange polynomials</h2>
                <Form>
                    <Form.Group as={Row} controlId="N">
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

                    <Form.Group as={Row} controlId="fx">
                        <Form.Label column sm="2">
                            F(x) :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="number"
                                step="1"
                                onChange={(e) => {
                                    setFx(parseInt(e.target.value))
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
                                    'http://localhost:8080/api/v1/interpolationandextrapolation/lagrangepolynomials',
                                    { x, y, fx }
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
                                    <th>Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
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

export default Lagrangepolynomials
