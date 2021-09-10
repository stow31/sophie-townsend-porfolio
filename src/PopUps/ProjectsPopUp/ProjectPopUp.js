import { useContext } from 'react'
import { PortfolioContext } from '../../PortfolioContext.js'
import ProjectAside from './ProjectAside.js'
import ProjectTicTacToe from './ProjectTicTacToe.js'
import ProjectLBry from './ProjectLBry.js'
import ProjectPortfolio from './ProjectPortfolio.js'
import ProjectBensFriend from './ProjectBensFriend.js'

function ProjectPopUp(){

    const {
        isProjectVisable,
        isAboutVisable,
        setAboutVisable,
        setProjectVisable,
        isSkillsVisable,
        setSkillsVisable,
        projectMainDivRef
    } = useContext(PortfolioContext);

    const handleProjectClick = () =>{
        if(isProjectVisable === 'project-div visable'){

            setProjectVisable("project-div visable bring-front")

            if (isSkillsVisable.includes("bring-front")){
                setSkillsVisable(isSkillsVisable.replace("bring-front", "").trim())
            }

            if (isAboutVisable.includes("bring-front")){
                setAboutVisable(isAboutVisable.replace("bring-front", "").trim())
            }

        } 
    }

    return(
        <div onClick={handleProjectClick} className={isProjectVisable}>
            < ProjectAside />
            <div className="body-div">
                <div className="header-div">
                    <h2 className="pop-up-headers">My Projects</h2>
                </div>
                <div ref={projectMainDivRef} className="main-div">
                    <ProjectTicTacToe />
                    <ProjectLBry />
                    <ProjectPortfolio />
                    <ProjectBensFriend />                    
                </div>
            </div>
        </div>
    )
}

export default ProjectPopUp