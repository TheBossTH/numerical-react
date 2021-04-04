import Bisection from '../components/Bisection'
import FalsePosition from '../components/FalsePosition'
import OnePoint from '../components/OnePoint'
import NewtonRaphson from '../components/NewtonRaphson'
import Secant from '../components/Secant'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const RootsOfEquationsPage = () => {
    return (
        <div>
            <Bisection />
            <FalsePosition />
            <OnePoint />
            <NewtonRaphson />
            <Secant />
        </div>
    )
}

export default RootsOfEquationsPage
