import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/login" className="nav-link">
                        Login
                    </NavLink>
                    <NavLink to="/register" className="nav-link">
                        Register
                    </NavLink>
                    <NavLink to="/counter" className="nav-link">
                        Counter(not Strike)
                    </NavLink>
                </Nav>
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                    />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBar
