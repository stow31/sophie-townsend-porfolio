import './Splash.css';
import userIcon from './images/user-icon.png'
import IconList from './IconList.js'
import AboutPopUp from './PopUps/AboutPopUp/AboutPopUp.js'
import ProjectPopUp from './PopUps/ProjectsPopUp/ProjectPopUp.js'
import SkillsPopUp from './PopUps/SkillsPopUp/SkillsPopUp.js'
import resume from './files/sophie-townsend-resume.pdf'

function Splash(){

    return(
        <div className="homepage">
            <div className="crt">
                <div className="scanline"></div>
                <div id="second" className="scanline"></div>
                <div id="third" className="scanline"></div>

                <nav className="main-nav">
                    <img className="computer-icon" src={userIcon} alt="User Icon" />
                    <a href="mailto:se.townsend31@gmail.com">Email</a>
                    <a href={resume} download>Resume</a>
                    <a target="_blank" href="https://github.com/stow31">GitHub</a>
                    <a target="_blank" href="https://www.linkedin.com/in/sophie-townsend-sydney/">LinkedIn</a>
                </nav>

                <div className="screen-div">
                    <IconList />
                    <div className="popup-div">
                        <AboutPopUp />
                        <ProjectPopUp />
                        <SkillsPopUp />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Splash