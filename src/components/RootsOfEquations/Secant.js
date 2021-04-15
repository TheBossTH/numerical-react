import { useState } from 'react'
import { Container, Form, Button, Row, Col, Table } from 'react-bootstrap'
import { Line } from 'react-chartjs-2'
const axios = require('axios').default

const Secant = () => {
    const [data, setData] = useState({
        x0: 1,
        x1: 2,
        eq: '(x^2)-7',
        error: 0.00001,
    })
    const [results, setResults] = useState(null)
    const datagraph = {
        labels: [],
        datasets: [
            {
                label: 'Xi',
                data: [],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    }
    results !== null &&
        results.map(
            (r) => (
                datagraph.labels.push(r.xi),
                datagraph.datasets[0].data.push(r.fxi)
            )
        )
    const options = {
        title: {
            display: true,
            text: 'Secant',
        },
    }
    return (
        <div>
            <Container className="mt-5 p-4 bg-dark text-white shadow">
                <h2>Secant Method</h2>
                <Form>
                    <Form.Group as={Row} controlId="Equation">
                        <Form.Label column sm="2">
                            Equation :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="text"
                                placeholder="(x^2)-7"
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
                            X0 :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="number"
                                placeholder="X0"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        x0: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="XL">
                        <Form.Label column sm="2">
                            X1 :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="number"
                                placeholder="X1"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        x1: parseFloat(e.target.value),
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
                                        'http://localhost:8080/api/v1/root/secant',
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
                        <div>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>Iteration</th>
                                        <th>X0</th>
                                        <th>X1</th>
                                        <th>FX0</th>
                                        <th>FX1</th>
                                        <th>DeltaX</th>
                                        <th>Xi</th>
                                        <th>ER</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {results.map((r) => (
                                        <tr key={r.iteration}>
                                            <td>{r.iteration}</td>
                                            <td>{r.x0}</td>
                                            <td>{r.x1}</td>
                                            <td>{r.fx0}</td>
                                            <td>{r.fx1}</td>
                                            <td>{r.deltax}</td>
                                            <td>{r.xi}</td>
                                            <td>{r.er}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <Line data={datagraph} options={options} />
                        </div>
                    )}
                </Form>
            </Container>
        </div>
    )
}

export default Secant
