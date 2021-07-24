import './Splash.css';
import userIcon from './images/user-icon.png'
import projectIcon from './images/project-icon.png'
import ticTacToeImg1 from './images/tic-tac-toe-screenshot-1.png'
import ticTacToeImg2 from './images/tic-tac-toe-screenshot-2.png'
import lBryImg1 from './images/l-bry-screenshot-1.png'
import lBryImg2 from './images/l-bry-screenshot-2.png'
import lBryImg3 from './images/l-bry-screenshot-3.png'
import portfolioImg1 from './images/portfolio-screenshot-1.png'
import portfolioImg2 from './images/portfolio-screenshot-2.png'
import portfolioImg3 from './images/portfolio-screenshot-3.png'
import bensFriendImg1 from './images/bens-friend-screenshot-1.png'
import bensFriendImg2 from './images/bens-friend-screenshot-2.png'
import { PortfolioContext } from './PortfolioContext.js'
import { useState, useContext } from 'react'
import IconList from './IconList.js'
import AboutPopUp from './PopUps/AboutPopUp/AboutPopUp.js'

function Splash(){


const {        
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
    setSkillsVisable
 } = useContext(PortfolioContext)




const handleProjectHide = () =>{
    if( isProjectVisable === 'project-div visable' ){
        setProjectVisable("project-div")
    }
}

const handleProjectBody = (e) =>{
    if (e.target.textContent === 'Tic Tac Toe'){
        setTicTacToeClassName('tic-tac-toe-main')
        setLBryClassName('l-bry-main hide')
        setPortfolioClassName('portfolio-main hide')
        setBensFriendClassName('bens-friend-main hide')
    } else if (e.target.textContent === 'L-Bry'){
        setTicTacToeClassName('tic-tac-toe-main hide')
        setLBryClassName('l-bry-main')
        setPortfolioClassName('portfolio-main hide')
        setBensFriendClassName('bens-friend-main hide')
    } else if (e.target.textContent === 'jgrs Porfolios'){
        setTicTacToeClassName('tic-tac-toe-main hide')
        setLBryClassName('l-bry-main hide')
        setPortfolioClassName('portfolio-main')
        setBensFriendClassName('bens-friend-main hide')
    } else if (e.target.textContent === `Bens's Friend`){
        setTicTacToeClassName('tic-tac-toe-main hide')
        setLBryClassName('l-bry-main hide')
        setPortfolioClassName('portfolio-main hide')
        setBensFriendClassName('bens-friend-main')
    }
}

const handleSkillsHide = () =>{
    if( isSkillsVisable === 'skills-div visable' ){
        setSkillsVisable("skills-div")
    }
}

    return(
        <div className="homepage">
            <nav className="main-nav">
                <img className="computer-icon" src={userIcon} alt="User Icon" />
                <a href="mailto:se.townsend31@gmail.com">Email</a>
                <a href="mailto:se.townsend31@gmail.com">Resume</a>
                <a target="_blank" href="https://github.com/stow31">GitHub</a>
                <a target="_blank" href="https://www.linkedin.com/in/sophie-townsend-sydney/">LinkedIn</a>
            </nav>

            <div className="screen-div">

                <IconList />

                <div className="popup-div">

                    <AboutPopUp />

                    <div className={isProjectVisable}>
                        <div className="aside">
                            <div className="control-row">
                                <div onClick={handleProjectHide} className="exit-btn"></div>
                            </div>
                                <p onClick={handleProjectBody}>Tic Tac Toe</p>
                                <p onClick={handleProjectBody}>L-Bry</p>
                                <p onClick={handleProjectBody}>jgrs Porfolios</p>
                                <p onClick={handleProjectBody}>Bens's Friend</p>
                        </div>
                        <div className="body-div">
                            <div className="header-div">
                                <h2 class="pop-up-headers">My Projects</h2>
                            </div>
                            <div className="main-div">
                                <div className={ticTacToeClassName}>
                                    <h3>Tic Tac Toe</h3>
                                    <a href="https://stow31.github.io/tic-tac-toe/">[open app]</a>
                                    <a href="https://github.com/stow31/tic-tac-toe">[github]</a>
                                    <ul>
                                        <li>Logic game using HTML, CSS, JavaScript and animation libraries.</li>
                                        <li>I went above the project outline to make a 4x4 tic tac toe grid.</li>
                                    </ul>
                                    <img className="project-screenshots" src={ticTacToeImg2} alt="Tic Tac Toe Screenshot" />
                                    <img className="project-screenshots" src={ticTacToeImg1} alt="Tic Tac Toe Screenshot" />
                                </div>
                                <div className={lBryClassName}>
                                    <h3>L-Bry</h3>
                                    <a href="https://ancient-stream-85049.herokuapp.com/">[open app]</a>
                                    <a href="https://github.com/stow31/l-bry">[github]</a>
                                    <ul>
                                        <li>Sample Login Details
                                            <ul>
                                                <li><span className="bold">Email:</span> test@mail.com</li>
                                                <li><span className="bold">Password:</span> Password123!</li>
                                            </ul>
                                        </li>
                                        <li>L-Bry is a web based app for managing your books and bookclub using Google Books API.</li>
                                        <li>Created using Ruby, CSS, Sinatra, HTTParty, PG and BCyrpt.</li>
                                    </ul>
                                    <img className="project-screenshots" src={lBryImg1} alt="L Bry Screenshot" />
                                    <img className="project-screenshots" src={lBryImg2} alt="L Bry Screenshot" />
                                    <img className="project-screenshots" src={lBryImg3} alt="L Bry Screenshot" />
                                </div>
                                <div className={portfolioClassName}>
                                <h3>jgrs Porfolios</h3>
                                    <a href="https://jgrs-portfolios.herokuapp.com/">[open app]</a>
                                    <a href="https://github.com/stow31/portfolio_app">[github]</a>
                                    <ul>
                                        <li>Sample Login Details
                                            <ul>
                                                <li><span className="bold">Email:</span> sophie@gmail.com</li>
                                                <li><span className="bold">Password:</span>password123</li>
                                            </ul>
                                        </li>
                                        <li>
                                            JGRS Portfolios is a hybrid MPA/SPA for users to create and customise their portfolios. 
                                        </li>
                                        <li>
                                            Built with a team of developers where we made use of GitHub collaborations.
                                        </li>
                                        <li>
                                            Was built using Javascript, HTML, CSS and Node.js with Express.
                                        </li>
                                        <li>
                                            Additional technology:
                                            <ul>
                                                <li>PostgreSQL with JSONB objects for database</li>
                                                <li>EJS for templates</li>
                                                <li>Express Session for login management</li>
                                                <li>Axios for http requests</li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <img className="project-screenshots" src={portfolioImg1} alt="Portfolio Screenshot" />
                                    <img className="project-screenshots" src={portfolioImg2} alt="Portfolio Screenshot" />
                                    <img className="project-screenshots" src={portfolioImg3} alt="Portfolio Screenshot" />
                                </div>
                                <div className={bensFriendClassName}>
                                    <h3>Bens's Friend</h3>
                                    <a href="http://bensfriend.surge.sh/">[open app]</a>
                                    <a href="https://github.com/stow31/bens-friend">[github]</a>
                                    <ul>
                                        <li>
                                           Create and look after your own pet! Maintain your pets health by taking it to the bathroom, feeding it, putting it to bed and playing with it. If your pets health gets too low it may die so make sure you are responsible and give it all the love and care it needs! 
                                        </li>
                                        <li>
                                            Built using React & made use of material-ui for progress bars
                                        </li>
                                        <li>
                                            Made use of assets from Dribble & PNG Tree
                                        </li>
                                    </ul>
                                    <img className="project-screenshots" src={bensFriendImg1} alt="Portfolio Screenshot" />
                                    <img className="project-screenshots" src={bensFriendImg2} alt="Portfolio Screenshot" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={isSkillsVisable}>
                        <div className="skills-body-div">
                            <div className="header-div">
                                <div className="control-row">
                                    <div onClick={handleSkillsHide} className="exit-btn"></div>
                                </div>
                                <h2 class="pop-up-headers">Skills</h2>
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

                </div>

            </div>
        </div>
    )
}

export default Splash