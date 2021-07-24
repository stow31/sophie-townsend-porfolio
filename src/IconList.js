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
        if( isAboutVisable === 'about-div' ){
            setAboutVisable("about-div visable")
        } else {
            setAboutVisable("about-div")
        }
    }

    const handleProjectsVisable = () =>{
        if( isProjectVisable === 'project-div' ){
            setProjectVisable("project-div visable")
        } else {
            setProjectVisable("project-div")
        }
    }

    const handleSkillsVisable = () =>{
        if( isSkillsVisable === 'skills-div' ){
            setSkillsVisable("skills-div visable")
        } else {
            setSkillsVisable("skills-div")
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