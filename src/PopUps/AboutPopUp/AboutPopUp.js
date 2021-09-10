import AboutAside from './AboutAside.js'
import Profile from './Profile.js'
import WorkExperience from './WorkExperience.js'
import FunFacts from './FunFacts'
import Education from './Education'
import { useContext } from 'react'
import { PortfolioContext } from '../../PortfolioContext.js'

function AboutPopUp(){

    const {
        isAboutVisable,
        setAboutVisable,
        isProjectVisable,
        setProjectVisable,
        isSkillsVisable,
        setSkillsVisable,
        aboutMainDivRef
    } = useContext(PortfolioContext)

    const handleAboutClick = () =>{
        if(isAboutVisable === 'about-div visable'){

            setAboutVisable("about-div visable bring-front")

            if (isProjectVisable.includes("bring-front")){
                setProjectVisable(isProjectVisable.replace("bring-front", "").trim())
            }

            if (isSkillsVisable.includes("bring-front")){
                setSkillsVisable(isSkillsVisable.replace("bring-front", "").trim())
            }
        }
    }

    return(
        <div onClick={handleAboutClick} className={isAboutVisable}>
            <AboutAside />
            <div className="body-div">
                <div className="header-div">
                    <h2 className="pop-up-headers">About Me</h2>
                </div>
                <div ref={aboutMainDivRef} className="main-div">
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