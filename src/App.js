import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DynamicPage from './pages/DynamicPage'
import CounterPage from './pages/CounterPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path={'/login'}>
                    <LoginPage />
                </Route>
                <Route path={'/register'}>
                    <RegisterPage />
                </Route>
                <Route path={'/counter'}>
                    <CounterPage />
                </Route>
                <Route path={'/:name,:nickname'}>
                    <DynamicPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
