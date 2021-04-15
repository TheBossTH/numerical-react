import { Container } from 'react-bootstrap'
import Itsuki from '../images/Itsuki.gif'

const FormHome = () => {
    return (
        <div>
            <Container className="mt-5 p-4 bg-dark text-center text-white shadow">
                <h2>Itsuki is No.1 Waifu</h2>
                <br />
                <img src={Itsuki} alt="Itsuki" className="rounded img-fluid" />
                <br />
                <h3 className="mt-5">Kittidet Cheavachirakul</h3>
                <h3>6104062630174</h3>
            </Container>
        </div>
    )
}

export default FormHome
