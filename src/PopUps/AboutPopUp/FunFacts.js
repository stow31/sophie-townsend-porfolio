import { useContext } from 'react'
import { PortfolioContext } from '../../PortfolioContext.js'

function FunFacts(){

    const {
        funFactClassName
    } = useContext(PortfolioContext)

    return(
        <div className={funFactClassName}>
            <ul>
                <li>I love spending time with my dog Benson.</li>
                <li>I enjoy swimming, cycling, rowing and pilates.</li>
                <li>I spend a lot of my spare time reading, my favourite books include The Harry Potter Series, Taylor Jenkins Reid books and On The Jellicoe Road.</li>
                <li>My guilty pleasure is reality TV shows (anything Bravo).</li>
            </ul>
        </div>
    )
}

export default FunFacts