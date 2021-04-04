import IndexPage from './pages/IndexPage'
import AssignmentsPage from './pages/AssignmentsPage'
import DynamicPage from './pages/DynamicPage'
import CounterPage from './pages/CounterPage'
import GraphPage from './pages/GraphPage'
import BisectionPage from './pages/RootsOfEquations/BisectionPage'
import FalsePositionPage from './pages/RootsOfEquations/FalsePositionPage'
import OnePointPage from './pages/RootsOfEquations/OnePointPage'
import NewtonRaphsonPage from './pages/RootsOfEquations/NewtonRaphsonPage.js'
import SecantPage from './pages/RootsOfEquations/SecantPage'
import CramerPage from './pages/LinearAlgebraicEquations/CramerPage'
import LinearAlgebraicEquationsPage from './pages/LinearAlgebraicEquationsPage'
import InterpolationandExtrapolationPage from './pages/InterpolationandExtrapolationPage'

import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path={'/'}>
                    <IndexPage />
                </Route>
                <Route path={'/Bisection'}>
                    <BisectionPage />
                </Route>
                <Route path={'/FalsePosition'}>
                    <FalsePositionPage />
                </Route>
                <Route path={'/OnePoint'}>
                    <OnePointPage />
                </Route>
                <Route path={'/NewtonRaphson'}>
                    <NewtonRaphsonPage />
                </Route>
                <Route path={'/Secant'}>
                    <SecantPage />
                </Route>
                <Route path={'/Cramer'}>
                    <CramerPage />
                </Route>
                <Route path={'/LinearAlgebraicEquationsPage'}>
                    <LinearAlgebraicEquationsPage />
                </Route>
                <Route path={'/InterpolationandExtrapolationPage'}>
                    <InterpolationandExtrapolationPage />
                </Route>
                <Route path={'/assignments'}>
                    <AssignmentsPage />
                </Route>
                <Route path={'/counter'}>
                    <CounterPage />
                </Route>
                <Route path={'/graph'}>
                    <GraphPage />
                </Route>
                <Route path={'/:name/:nickname'}>
                    <DynamicPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
