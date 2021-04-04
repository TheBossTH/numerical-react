import Bisection from '../components/RootsOfEquations/Bisection'
import FalsePosition from '../components/RootsOfEquations/FalsePosition'
import OnePoint from '../components/RootsOfEquations/OnePoint'
import NewtonRaphson from '../components/RootsOfEquations/NewtonRaphson'
import Secant from '../components/RootsOfEquations/Secant'
const InterpolationandExtrapolationPage = () => {
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

export default InterpolationandExtrapolationPage
