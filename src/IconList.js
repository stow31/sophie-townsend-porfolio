import userIcon from './images/user-icon.png'
import projectIcon from './images/project-icon.png'
import skills from './images/skills.png'
import { useContext } from 'react'
import { PortfolioContext } from './PortfolioContext.js'

function IconList(){

    const {
        isAboutVisable,
        setAboutVisable,
        isProjectVisable,
        setProjectVisable,
        isSkillsVisable,
        setSkillsVisable
    } = useContext(PortfolioContext)

    const handleAboutVisable = () =>{
        if( isAboutVisable === 'about-div' || isAboutVisable === 'about-div visable'){

            setAboutVisable("about-div visable bring-front")

            if (isProjectVisable.includes("bring-front")){
                setProjectVisable(isProjectVisable.replace("bring-front", "").trim())
            }

            if (isSkillsVisable.includes("bring-front")){
                setSkillsVisable(isSkillsVisable.replace("bring-front", "").trim())
            }
        } 
    }

    const handleProjectsVisable = () =>{
        if( isProjectVisable === 'project-div' || isProjectVisable === 'project-div visable'){

            setProjectVisable("project-div visable bring-front")

            if (isSkillsVisable.includes("bring-front")){
                setSkillsVisable(isSkillsVisable.replace("bring-front", "").trim())
            }

            if (isAboutVisable.includes("bring-front")){
                setAboutVisable(isAboutVisable.replace("bring-front", "").trim())
            }

        } 
    }

    const handleSkillsVisable = () =>{
        if( isSkillsVisable === 'skills-div' || isSkillsVisable === 'skills-div visable'){

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
        <div className="icon-list">
            <section onClick={handleAboutVisable} className="icon-section">
                <img src={userIcon} alt="User Icon" />
                <p className="icon-label">About Me</p>
            </section>
            <section onClick={handleProjectsVisable} className="icon-section">
                <img src={projectIcon} alt="User Icon" />
                <p className="icon-label">Projects</p>
            </section>
            <section onClick={handleSkillsVisable} className="icon-section">
                <img src={skills} alt="User Icon" />
                <p className="icon-label">Skills</p>
            </section>
        </div>
    )
}

export default IconList