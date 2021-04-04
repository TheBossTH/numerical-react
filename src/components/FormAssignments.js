import { useState, useEffect } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
const axios = require('axios').default

const FormAssignments = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
    })
    const [isShow, setShow] = useState(false)
    const [isSubmit, setSubmit] = useState(false)

    useEffect(() => {
        console.log('Mount Component')
    }, [])

    useEffect(() => {
        console.log('useEffect : username Change')
    }, [data.username, data.password])

    return (
        <div>
            <Container className="mt-5 p-4 rounded bg-light">
                <Form>
                    <Form.Group controlId="Username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Username"
                            onChange={(e) => {
                                setData({ ...data, username: e.target.value })
                            }}
                        />
                    </Form.Group>
                    <Form.Group controlId="Password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter Password"
                            onChange={(e) => {
                                setData({ ...data, password: e.target.value })
                            }}
                        />
                    </Form.Group>
                    <Button
                        disabled={isSubmit}
                        onClick={async () => {
                            setSubmit(true)
                            const s = await axios.post(
                                'http://localhost:8080/api/v1/users/login',
                                data
                            )
                            console.log(s.config.data)
                            s.status === 200 && setSubmit(false)
                        }}
                    >
                        Login
                    </Button>
                </Form>
                <hr />
                <Button
                    variant="outline-secondary"
                    onClick={() => {
                        setShow(!isShow)
                    }}
                >
                    Click Me
                </Button>
                : {isShow.toString()}
                <br />
                {isShow && (
                    <div>
                        <h1>Username :</h1> {data.username}
                        <br />
                        <h1>Password :</h1> {data.password}
                    </div>
                )}
                <br />
            </Container>
        </div>
    )
}

export default FormAssignments
