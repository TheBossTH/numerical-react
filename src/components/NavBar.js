import { Nav, Navbar, NavDropdown, Form, Button } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import icon from '../images/icon.png'
const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
            <NavLink to="/" className="nav-link">
                <Navbar.Brand>
                    <img
                        src={icon}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown
                        title="Roots of Equations"
                        id="collasible-nav-dropdown"
                    >
                        <NavDropdown.Item as={Link} to="/Bisection">
                            Bisection Method
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/FalsePosition">
                            False-Position Method
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/OnePoint">
                            One-Point Iteration Method
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/NewtonRaphson">
                            Newton-Raphson Method
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/Secant">
                            Secant Method
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                        title="Linear Algebraic Equations"
                        id="collasible-nav-dropdown"
                    >
                        <NavDropdown.Item as={Link} to="/Cramer">
                            Cramer's rule
                        </NavDropdown.Item>
                        <NavDropdown.Item
                            as={Link}
                            to="/LinearAlgebraicEquationsPage"
                        >
                            Gauss-Elimination Method
                        </NavDropdown.Item>
                        <NavDropdown.Item
                            as={Link}
                            to="/LinearAlgebraicEquationsPage"
                        >
                            Gauss-Jordan Method
                        </NavDropdown.Item>
                        <NavDropdown.Item
                            as={Link}
                            to="/LinearAlgebraicEquationsPage"
                        >
                            LU decomposition Method
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item
                            as={Link}
                            to="/LinearAlgebraicEquationsPage"
                        >
                            Jacobi Iteration Method
                        </NavDropdown.Item>
                        <NavDropdown.Item
                            as={Link}
                            to="/LinearAlgebraicEquationsPage"
                        >
                            Gauss-seidel
                        </NavDropdown.Item>
                        <NavDropdown.Item
                            as={Link}
                            to="/LinearAlgebraicEquationsPage"
                        >
                            Conjugate Gradient Method
                        </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                        title="Interpolation and Extrapolation"
                        id="collasible-nav-dropdown"
                    >
                        <NavDropdown.Item
                            as={Link}
                            to="/InterpolationandExtrapolationPage"
                        >
                            Newton's divided-differences
                        </NavDropdown.Item>
                        <NavDropdown.Item
                            as={Link}
                            to="/InterpolationandExtrapolationPage"
                        >
                            Lagrange polynomials
                        </NavDropdown.Item>
                        <NavDropdown.Item
                            as={Link}
                            to="/InterpolationandExtrapolationPage"
                        >
                            Spline interpolation
                        </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                        title="Least-Squares Regression"
                        id="collasible-nav-dropdown"
                    >
                        <NavDropdown.Item
                            as={Link}
                            to="/InterpolationandExtrapolationPage"
                        >
                            Liner Regression
                        </NavDropdown.Item>
                        <NavDropdown.Item
                            as={Link}
                            to="/InterpolationandExtrapolationPage"
                        >
                            Polynomial Regression
                        </NavDropdown.Item>
                        <NavDropdown.Item
                            as={Link}
                            to="/InterpolationandExtrapolationPage"
                        >
                            Multiple Linear Regression
                        </NavDropdown.Item>
                    </NavDropdown>

                    <NavLink to="/assignments" className="nav-link">
                        Assignments
                    </NavLink>
                    <NavLink to="/counter" className="nav-link">
                        Counter(not Strike)
                    </NavLink>
                    <NavLink to="/graph" className="nav-link">
                        Graph
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
