import { useState, useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'

const FormHome = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
    })
    const [isShow, setShow] = useState(false)

    useEffect(() => {
        console.log('Mount Component')
    }, [])

    useEffect(() => {
        console.log('useEffect : username Change')
    }, [data.username, data.password])

    return (
        <div>
            <Container className="mt-5 p-4 bg-light">
                <h2>Hello ,I'm Kittidet Cheavachirakul</h2>
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
                <hr />
                <Button
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
