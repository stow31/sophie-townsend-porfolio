import { useContext } from 'react'
import { PortfolioContext } from '../../PortfolioContext.js'
import portfolioImg1 from '../../images/portfolio-screenshot-1.png'
import portfolioImg2 from '../../images/portfolio-screenshot-2.png'
import portfolioImg3 from '../../images/portfolio-screenshot-3.png'

function ProjectPortfolio(){

    const {
        portfolioClassName
    } = useContext(PortfolioContext);

    return(
        <div className={portfolioClassName}>
            <h3>jgrs Porfolios</h3>
            <a target="_blank" href="https://jgrs-portfolios.herokuapp.com/">[open app]</a>
            <a target="_blank" href="https://github.com/stow31/portfolio_app">[github]</a>
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
    )
}

export default ProjectPortfolio