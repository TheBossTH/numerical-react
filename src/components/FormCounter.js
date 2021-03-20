import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'

const FormCounter = () => {
    const [Cout, setCout] = useState({
        numconter: 0,
    })

    useEffect(() => {
        console.log('Mount Component')
    }, [])

    return (
        <div>
            <Container>
                <br />
                {Cout.numconter > 20 ? (
                    <h1 className="text-danger">{Cout.numconter}</h1>
                ) : Cout.numconter < 0 ? (
                    <h1 className="text-success">{Cout.numconter}</h1>
                ) : (
                    <h1>{Cout.numconter}</h1>
                )}
                <button
                    onClick={() => {
                        setCout({ ...Cout, numconter: Cout.numconter - 1 })
                    }}
                >
                    YAMETE! Senpai(-)
                </button>
                <button
                    onClick={() => {
                        setCout({ ...Cout, numconter: Cout.numconter + 1 })
                    }}
                >
                    Notice Me Senpai(+)
                </button>
                <br />
                <br />
                <h2>Count &gt; 20 = Red</h2>
                <h2>Count &lt; 0 = Green</h2>
            </Container>
        </div>
    )
}

export default FormCounter
