import { useContext } from 'react'
import { PortfolioContext } from '../../PortfolioContext.js'

function AboutAside(){

    const {
        isAboutVisable,
        setAboutVisable,
        setProfileClassName,
        setworkExperienceClassName,
        setFunFactClassName,
        setEducationClassName
    } = useContext(PortfolioContext)

    const handleAboutHide = () =>{
        if( isAboutVisable === 'about-div visable' ){
            setAboutVisable("about-div")
        }
    }
    
    const handleAboutBody = (e) =>{
        if (e.target.textContent === 'Profile'){
            setProfileClassName('profile-main')
            setworkExperienceClassName('profile-main hide')
            setFunFactClassName('fun-facts-main hide')
            setEducationClassName('education-main hide')
        } else if (e.target.textContent === 'Work Experience'){
            setProfileClassName('profile-main hide')
            setworkExperienceClassName('work-experience-main')
            setFunFactClassName('fun-facts-main hide')
            setEducationClassName('education-main hide')
        } else if (e.target.textContent === 'Fun Facts'){
            setProfileClassName('profile-main hide')
            setworkExperienceClassName('work-experience-main hide')
            setFunFactClassName('fun-facts-main')
            setEducationClassName('education-main hide')
        } else if (e.target.textContent === 'Education'){
            setEducationClassName('education-main')
            setProfileClassName('profile-main hide')
            setworkExperienceClassName('work-experience-main hide')
            setFunFactClassName('fun-facts-main hide')
        }
    }

    return (
        <div className="aside">
        <div className="control-row">
            <div onClick={handleAboutHide} className="exit-btn"></div>
        </div>
            <p onClick={handleAboutBody}>Profile</p>
            <p onClick={handleAboutBody}>Work Experience</p>
            <p onClick={handleAboutBody}>Education</p>
            <p onClick={handleAboutBody}>Fun Facts</p>
    </div>
    )
}

export default AboutAside