import { useContext } from 'react'
import { PortfolioContext } from '../../PortfolioContext.js'

function SkillsPopUp(){

    const {
        isAboutVisable,
        setAboutVisable,
        isProjectVisable,
        setProjectVisable,
        isSkillsVisable,
        setSkillsVisable
    } = useContext(PortfolioContext);

    const handleSkillsHide = () =>{
        if( isSkillsVisable === 'skills-div visable' ||  isSkillsVisable === 'skills-div visable bring-front'){
            setSkillsVisable("skills-div")
        }
    }

    const handleSkillsClick = () =>{
        if( isSkillsVisable === 'skills-div visable'){

            setSkillsVisable("skills-div visable bring-front")

            if (isProjectVisable.includes("bring-front")){
                setProjectVisable(isProjectVisable.replace("bring-front", "").trim())
            }

            if (isAboutVisable.includes("bring-front")){
                setAboutVisable(isAboutVisable.replace("bring-front", "").trim())
            }

        } 
    }

    return (
        <div onClick={handleSkillsClick} className={isSkillsVisable}>
            <div className="skills-body-div">
                <div className="header-div">
                    <div className="control-row">
                        <div onClick={handleSkillsHide} className="exit-btn"></div>
                    </div>
                    <h2 className="pop-up-headers">Skills</h2>
                </div>
                <div className="skills-main-div">
                    <ul>
                        <li>javaScript, HTML, CSS</li>
                        <li>Ruby, Sinatra</li>
                        <li>Node.js with Express</li>
                        <li>React</li>
                        <li>SQL, Postgres</li>
                        <li>Git and Github</li>
                        <li>Google Analytics</li>
                        <li>eCommerce platforms: Magento 2, Squarespace, Wordpress & WooCommerce</li>
                        <li>Adobe Photoshop</li>
                        <li>Figma</li>
                        <li>Project Management</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SkillsPopUp