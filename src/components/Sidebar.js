import {
    ProSidebar,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
    Menu,
    MenuItem,
    SubMenu,
} from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import './Sidebar.scss'
import image from '../images/bg2.jpg'
import {
    FaSquareRootAlt,
    FaBuffer,
    FaYandexInternational,
    FaJsSquare,
    FaGithub,
    FaPlus,
    FaHome,
} from 'react-icons/fa'
const Sidebar = () => {
    return (
        <ProSidebar image={image}>
            <SidebarHeader>
                <div
                    style={{
                        padding: '24px',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        fontSize: 14,
                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    Numerical React
                    <Link to="/" />
                </div>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem icon={<FaHome />}>
                        Home
                        <Link to="/" />
                    </MenuItem>
                    <SubMenu
                        title="Roots of Equations"
                        icon={<FaSquareRootAlt />}
                    >
                        <MenuItem>
                            Bisection Method
                            <Link to="/Bisection" />
                        </MenuItem>
                        <MenuItem>
                            False-Position Method
                            <Link to="/FalsePosition" />
                        </MenuItem>
                        <MenuItem>
                            One-Point Iteration Method
                            <Link to="/OnePoint" />
                        </MenuItem>
                        <MenuItem>
                            Newton-Raphson Method
                            <Link to="/NewtonRaphson" />
                        </MenuItem>
                        <MenuItem>
                            Secant Method
                            <Link to="/Secant" />
                        </MenuItem>
                    </SubMenu>
                    <SubMenu
                        title="Linear Algebraic Equations"
                        icon={<FaBuffer />}
                    >
                        <MenuItem>
                            Cramer's rule
                            <Link to="/Cramer" />
                        </MenuItem>
                        <MenuItem>
                            Gauss-Elimination Method
                            <Link to="/GaussElimination" />
                        </MenuItem>
                        <MenuItem>
                            Gauss-Jordan Method
                            <Link to="/GaussJordan" />
                        </MenuItem>
                        <MenuItem>
                            LU decomposition Method
                            <Link to="/LUdecomposition" />
                        </MenuItem>
                        <MenuItem>
                            Jacobi Iteration Method
                            <Link to="/JacobiIteration" />
                        </MenuItem>
                        <MenuItem>
                            Gauss-seidel
                            <Link to="/Gaussseidel" />
                        </MenuItem>
                        <MenuItem>
                            Conjugate Gradient Method
                            <Link to="/ConjugateGradient" />
                        </MenuItem>
                    </SubMenu>
                    <SubMenu
                        title="Interpolation and Extrapolation"
                        icon={<FaYandexInternational />}
                    >
                        <MenuItem>
                            Newton's divided-differences
                            <Link to="/Newtondivided" />
                        </MenuItem>
                        <MenuItem>
                            Lagrange polynomials
                            <Link to="/Lagrangepolynomials" />
                        </MenuItem>
                        <MenuItem>
                            Spline interpolation
                            <Link to="/Splineinterpolation" />
                        </MenuItem>
                    </SubMenu>
                    <SubMenu
                        title="Least-Squares Regression"
                        icon={<FaJsSquare />}
                    >
                        <MenuItem>
                            Linear Regression
                            <Link to="/LinearRegression" />
                        </MenuItem>
                        <MenuItem>
                            Polynomial Regression
                            <Link to="/PolynomialRegression" />
                        </MenuItem>
                        <MenuItem>
                            Multiple Linear Regression
                            <Link to="/MultipleLinearRegression" />
                        </MenuItem>
                    </SubMenu>
                    <MenuItem icon={<FaPlus />}>
                        Assignments
                        <Link to="/assignments" />
                    </MenuItem>
                    <MenuItem icon={<FaPlus />}>
                        Counter(not Strike)
                        <Link to="/counter" />
                    </MenuItem>
                    <MenuItem icon={<FaPlus />}>
                        Graph
                        <Link to="/graph" />
                    </MenuItem>
                </Menu>
            </SidebarContent>
            <SidebarFooter style={{ textAlign: 'center' }}>
                <div
                    className="sidebar-btn-wrapper"
                    style={{
                        padding: '20px 24px',
                    }}
                >
                    <a
                        href="https://github.com/TheBossTH/numerical-react"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                        <span> Github</span>
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar>
    )
}
export default Sidebar
