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
import icon from '../images/icon.png'
import image from '../images/bg1.jpg'
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
                </div>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="square">
                    <SubMenu title="Roots of Equations" icon={icon}>
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
                    <MenuItem icon={icon}>Dashboard</MenuItem>
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
                        href="https://github.com/azouaoui-med/react-pro-sidebar"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <span>Github</span>
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar>
    )
}
export default Sidebar
