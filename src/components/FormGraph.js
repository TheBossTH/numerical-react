import { React } from 'react'
import { Container } from 'react-bootstrap'
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
                <Line data={data} options={options} />
            </Container>
        </div>
    )
}

export default FormGraph
