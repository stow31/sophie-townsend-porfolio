import { useContext } from 'react'
import { PortfolioContext } from '../../PortfolioContext.js'
import lBryImg1 from '../../images/l-bry-screenshot-1.png'
import lBryImg2 from '../../images/l-bry-screenshot-2.png'
import lBryImg3 from '../../images/l-bry-screenshot-3.png'

function ProjectLBry(){

    const { 
        lBryClassName
     } = useContext(PortfolioContext);

    return(
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
    )
}

export default ProjectLBry