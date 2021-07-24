import { useContext } from 'react'
import { PortfolioContext } from '../../PortfolioContext.js'

function Education(){

    const {
        educationClassName
    } = useContext(PortfolioContext)

    return(
        <div className={educationClassName}>
            <p>Education</p>
        </div>
    )
}

export default Education