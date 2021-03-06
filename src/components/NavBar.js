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
                        alt="logo"
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
                        <NavDropdown.Item as={Link} to="/GaussElimination">
                            Gauss-Elimination Method
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/GaussJordan">
                            Gauss-Jordan Method
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/LUdecomposition">
                            LU decomposition Method
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/JacobiIteration">
                            Jacobi Iteration Method
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/Gaussseidel">
                            Gauss-seidel
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/ConjugateGradient">
                            Conjugate Gradient Method
                        </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                        title="Interpolation and Extrapolation"
                        id="collasible-nav-dropdown"
                    >
                        <NavDropdown.Item as={Link} to="/Newtondivided">
                            Newton's divided-differences
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/Lagrangepolynomials">
                            Lagrange polynomials
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/Splineinterpolation">
                            Spline interpolation
                        </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                        title="Least-Squares Regression"
                        id="collasible-nav-dropdown"
                    >
                        <NavDropdown.Item as={Link} to="/LinearRegression">
                            Linear Regression
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/PolynomialRegression">
                            Polynomial Regression
                        </NavDropdown.Item>
                        <NavDropdown.Item
                            as={Link}
                            to="/MultipleLinearRegression"
                        >
                            Multiple Linear Regression
                        </NavDropdown.Item>
                    </NavDropdown>
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
