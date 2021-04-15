import IndexPage from './pages/IndexPage'
import BisectionPage from './pages/RootsOfEquations/BisectionPage'
import FalsePositionPage from './pages/RootsOfEquations/FalsePositionPage'
import OnePointPage from './pages/RootsOfEquations/OnePointPage'
import NewtonRaphsonPage from './pages/RootsOfEquations/NewtonRaphsonPage.js'
import SecantPage from './pages/RootsOfEquations/SecantPage'

import CramerPage from './pages/LinearAlgebraicEquations/CramerPage'
import GaussEliminationPage from './pages/LinearAlgebraicEquations/GaussEliminationPage'
import GaussJordanPage from './pages/LinearAlgebraicEquations/GaussJordanPage'
import LUdecompositionPage from './pages/LinearAlgebraicEquations/LUdecompositionPage'
import JacobiIterationPage from './pages/LinearAlgebraicEquations/JacobiIterationPage'
import GaussseidelPage from './pages/LinearAlgebraicEquations/GaussseidelPage'
import ConjugateGradientPage from './pages/LinearAlgebraicEquations/ConjugateGradientPage'

import NewtondividedPage from './pages/InterpolationandExtrapolation/NewtondividedPage'
import LagrangepolynomialsPage from './pages/InterpolationandExtrapolation/LagrangepolynomialsPage'
import SplineinterpolationPage from './pages/InterpolationandExtrapolation/SplineinterpolationPage'

import LinearRegressionPage from './pages/LeastSquaresRegression/LinearRegressionPage'
import PolynomialRegressionPage from './pages/LeastSquaresRegression/PolynomialRegressionPage'
import MultipleLinearRegressionPage from './pages/LeastSquaresRegression/MultipleLinearRegressionPage'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
// import Sidebar from './components/Sidebar'

function App() {
    return (
        <Router>
            <NavBar />
            {/* <Sidebar /> */}
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
                <Route path={'/GaussElimination'}>
                    <GaussEliminationPage />
                </Route>
                <Route path={'/GaussJordan'}>
                    <GaussJordanPage />
                </Route>
                <Route path={'/LUdecomposition'}>
                    <LUdecompositionPage />
                </Route>
                <Route path={'/JacobiIteration'}>
                    <JacobiIterationPage />
                </Route>
                <Route path={'/Gaussseidel'}>
                    <GaussseidelPage />
                </Route>
                <Route path={'/ConjugateGradient'}>
                    <ConjugateGradientPage />
                </Route>
                <Route path={'/Newtondivided'}>
                    <NewtondividedPage />
                </Route>
                <Route path={'/Lagrangepolynomials'}>
                    <LagrangepolynomialsPage />
                </Route>
                <Route path={'/Splineinterpolation'}>
                    <SplineinterpolationPage />
                </Route>
                <Route path={'/LinearRegression'}>
                    <LinearRegressionPage />
                </Route>
                <Route path={'/PolynomialRegression'}>
                    <PolynomialRegressionPage />
                </Route>
                <Route path={'/MultipleLinearRegression'}>
                    <MultipleLinearRegressionPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
