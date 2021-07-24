import { useContext } from 'react'
import { PortfolioContext } from '../../PortfolioContext.js'

function FunFacts(){

    const {
        funFactClassName
    } = useContext(PortfolioContext)

    return(
        <div className={funFactClassName}>
            <p>Write some fun facts</p>
        </div>
    )
}

export default FunFacts