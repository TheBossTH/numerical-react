import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'

const FormLogin = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
    })
    const [isShow, setShow] = useState(true)

    useEffect(() => {
        console.log('Mount Component')
    }, [])

    useEffect(() => {
        console.log('useEffect : username Change')
    }, [data.username, data.password])

    return (
        <div>
            <Container>
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
                <button
                    onClick={() => {
                        setShow(!isShow)
                    }}
                >
                    Click Me
                </button>
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

export default FormLogin
