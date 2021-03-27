import { useState, useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
const axios = require('axios').default

const FormHome = () => {
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
            <Container className="mt-5 p-4 bg-light">
                <h2>Hello!</h2>
                <label>Username : </label>
                <input
                    type="text"
                    onChange={(e) => {
                        setData({ ...data, username: e.target.value })
                    }}
                />
                <br />
                <label>Password : </label>
                <input
                    type="password"
                    onChange={(e) => {
                        setData({ ...data, password: e.target.value })
                    }}
                />
                <br />
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

export default FormHome
