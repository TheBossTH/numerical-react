import { useState } from 'react'
import { Container, Form, Button, Row, Col, Table } from 'react-bootstrap'
import { Line } from 'react-chartjs-2'
const axios = require('axios').default

const NewtonRaphson = () => {
    const [data, setData] = useState({
        x: 0,
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
            text: 'Newton Raphson',
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    }
    return (
        <div>
            <Container className="mt-5 p-4 bg-dark text-white shadow">
                <h2>Newton-Raphson Method</h2>
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
                                required
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="XL">
                        <Form.Label column sm="2">
                            X Start :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="number"
                                placeholder="X Start"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        x: parseFloat(e.target.value),
                                    })
                                }}
                                required
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
                                required
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button
                                type="button"
                                onClick={async () => {
                                    const res = await axios.post(
                                        'http://localhost:8080/api/v1/root/newtonraphson',
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
                                        <th>Xi</th>
                                        <th>FX</th>
                                        <th>diff(FX)</th>
                                        <th>ER</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {results.map((r) => (
                                        <tr key={r.iteration}>
                                            <td>{r.iteration}</td>
                                            <td>{r.xi}</td>
                                            <td>{r.fx}</td>
                                            <td>{r.diffx}</td>
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

export default NewtonRaphson
