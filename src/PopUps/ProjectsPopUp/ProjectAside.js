import { useContext } from 'react';
import { PortfolioContext } from '../../PortfolioContext.js'

function ProjectAside() {

    const { 
        isProjectVisable,
        setProjectVisable,
        setTicTacToeClassName,
        setLBryClassName,
        setPortfolioClassName,
        setBensFriendClassName
    } = useContext(PortfolioContext)

    const handleProjectHide = () =>{
        if( isProjectVisable === 'project-div visable' || isProjectVisable === 'project-div visable bring-front'){
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

    return (
        <div className="aside">
            <div className="control-row">
                <div onClick={handleProjectHide} className="exit-btn"></div>
            </div>
            <p onClick={handleProjectBody}>Tic Tac Toe</p>
            <p onClick={handleProjectBody}>L-Bry</p>
            <p onClick={handleProjectBody}>jgrs Porfolios</p>
            <p onClick={handleProjectBody}>Bens's Friend</p>
        </div>
    )
}

export default ProjectAside