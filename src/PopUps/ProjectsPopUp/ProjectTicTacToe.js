import { useContext } from 'react'
import { PortfolioContext } from '../../PortfolioContext.js'
import ticTacToeImg1 from '../../images/tic-tac-toe-screenshot-1.png'
import ticTacToeImg2 from '../../images/tic-tac-toe-screenshot-2.png'

function ProjectTicTacToe(){

    const {
        ticTacToeClassName
    } = useContext(PortfolioContext);

    return(
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
    )
}

export default ProjectTicTacToe