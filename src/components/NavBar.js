import { Nav, Navbar, Form, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
            <Navbar.Brand href="/">Numerical</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/home" className="nav-link">
                        Home
                    </NavLink>
                    <NavLink to="/assignments" className="nav-link">
                        Assignments
                    </NavLink>
                    <NavLink to="/counter" className="nav-link">
                        Counter(not Strike)
                    </NavLink>
                </Nav>
                <Form inline>
                    <Button
                        variant="outline-info"
                        href="https://github.com/TheBossTH/numerical-react"
                        target="_blank"
                    >
                        Github
                    </Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBar
