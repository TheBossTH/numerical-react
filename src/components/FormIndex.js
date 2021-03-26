import { Container } from 'react-bootstrap'
import Itsuki from '../images/Itsuki.gif'

const FormHome = () => {
    return (
        <div>
            <Container className="mt-5 p-4 bg-light text-center">
                <h2>Itsuki is No.1 Waifu</h2>
                <br />
                <img src={Itsuki} alt="Itsuki" className="rounded img-fluid" />
            </Container>
        </div>
    )
}

export default FormHome
