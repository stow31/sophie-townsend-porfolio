import AboutAside from './AboutAside.js'
import Profile from './Profile.js'
import WorkExperience from './WorkExperience.js'
import FunFacts from './FunFacts'
import Education from './Education'
import { useContext } from 'react'
import { PortfolioContext } from '../../PortfolioContext.js'

function AboutPopUp(){

    const {
        isAboutVisable
    } = useContext(PortfolioContext)


    return(
        <div className={isAboutVisable}>
            <AboutAside />
            <div className="body-div">
                <div className="header-div">
                    <h2 class="pop-up-headers">About Me</h2>
                </div>
                <div className="main-div">
                    <Profile />
                    <WorkExperience />
                    <Education />
                    <FunFacts />
                </div>
            </div>
        </div>
    )

}

export default AboutPopUp