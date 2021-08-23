import { useContext } from 'react'
import { PortfolioContext } from '../../PortfolioContext.js'

function Education(){

    const {
        educationClassName
    } = useContext(PortfolioContext)

    return(
        <div className={educationClassName}>

            <div className="qualification">
                <h3>Software Engineering Immersive</h3>
                <p>2021 General Assembly</p>
            </div>

            <div className="qualification">
                <h3>Bachelor of Science | Environmental Science</h3>
                <p> 2017 University of Sydney</p>
            </div>

        </div>
    )
}

export default Education