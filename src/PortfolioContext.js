import React, {useState, createContext} from 'react'

export const PortfolioContext = createContext()

export function PortfolioProvider(props){

    const [isAboutVisable, setAboutVisable] = useState("about-div")
    const [ profileClassName, setProfileClassName ] = useState("profile-main")
    const [ workExperienceClassName, setworkExperienceClassName ] = useState("work-experience-main hide")
    const [ funFactClassName, setFunFactClassName ] = useState("fun-facts-main hide")
    const [ educationClassName, setEducationClassName ] = useState("education-main hide")
    const [isProjectVisable, setProjectVisable] = useState("project-div")
    const [ ticTacToeClassName, setTicTacToeClassName ] = useState("tic-tac-toe-main")
    const [ lBryClassName, setLBryClassName ] = useState("l-bry-main hide")
    const [ portfolioClassName, setPortfolioClassName ] = useState("portfolio-main hide")
    const [ bensFriendClassName, setBensFriendClassName ] = useState("bens-friend-main hide")
    const [isSkillsVisable, setSkillsVisable] = useState("skills-div")
    const [projectMainDivRef, setPortfolioMainDivRef] = useState(React.createRef())
    const [aboutMainDivRef, setAboutMainDivRef] = useState(React.createRef())

    return <PortfolioContext.Provider value={{
        isAboutVisable,
        setAboutVisable,
        profileClassName,
        setProfileClassName,
        workExperienceClassName,
        setworkExperienceClassName,
        funFactClassName,
        setFunFactClassName,
        isProjectVisable,
        setProjectVisable,
        ticTacToeClassName,
        setTicTacToeClassName,
        lBryClassName,
        setLBryClassName,
        portfolioClassName,
        setPortfolioClassName,
        bensFriendClassName,
        setBensFriendClassName,
        isSkillsVisable,
        setSkillsVisable,
        educationClassName, 
        setEducationClassName,
        aboutMainDivRef,
        projectMainDivRef
        }}>
        {props.children}
    </PortfolioContext.Provider>
}


