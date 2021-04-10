import { React } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { Line } from 'react-chartjs-2'
const FormGraph = () => {
    const data = {
        labels: ['Ichika', 'Nino', 'Miku', 'Yotsuba', 'Itsuki'],
        datasets: [
            {
                label: '# of Waifu Point',
                data: [10, 15, 18, 8, 20],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    }
    const options = {
        title: {
            display: true,
            text: 'Waifu Chart',
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
                <h1>Graph</h1>
                <p>This is a Graph</p>
                <Form>
                    <Form.Group controlId="WaifuName">
                        <Form.Label>Add Waifu</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Waiful Name"
                        />
                    </Form.Group>
                    <Form.Group controlId="WaifulPoint">
                        <Form.Control
                            type="number"
                            placeholder="Enter Waiful Point"
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Form>
                <Line data={data} options={options} />
            </Container>
        </div>
    )
}

export default FormGraph
