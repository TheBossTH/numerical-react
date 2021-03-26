import HomePage from './pages/HomePage'
import AssignmentsPage from './pages/AssignmentsPage'
import DynamicPage from './pages/DynamicPage'
import CounterPage from './pages/CounterPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path={'/home'}>
                    <HomePage />
                </Route>
                <Route path={'/assignments'}>
                    <AssignmentsPage />
                </Route>
                <Route path={'/counter'}>
                    <CounterPage />
                </Route>
                <Route path={'/:name/:nickname'}>
                    <DynamicPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
