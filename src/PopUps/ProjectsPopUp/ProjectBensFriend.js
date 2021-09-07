import { useContext } from 'react'
import { PortfolioContext } from '../../PortfolioContext.js'
import bensFriendImg1 from '../../images/bens-friend-screenshot-1.png'
import bensFriendImg2 from '../../images/bens-friend-screenshot-2.png'

function ProjectBensFriend(){

    const {
        bensFriendClassName
    } = useContext(PortfolioContext)

    return(
        <div className={bensFriendClassName}>
            <h3>Bens's Friend</h3>
            <a target="_blank" href="http://bensfriend.surge.sh/">[open app]</a>
            <a target="_blank" href="https://github.com/stow31/bens-friend">[github]</a>
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
    )
}

export default ProjectBensFriend