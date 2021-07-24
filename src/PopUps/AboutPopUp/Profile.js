import profileImage from '../../images/profile-image.jpeg'
import { useContext } from 'react'
import { PortfolioContext } from '../../PortfolioContext.js'

function Profile(){

    const {
        profileClassName
    } = useContext(PortfolioContext)

    return(
        <div className={profileClassName}>
            <img className="profile-image" src={profileImage} alt="Profile Image" />
            <h2></h2>
            <p>I am a former technical project manager working in e-commerce, in this role I oversaw the technical systems and operations. Here, I recognised my passion for problem-solving and the building side of software and made the change to study software engineering.</p> 
            <p>I want to use the skills I have to assist businesses in building technical systems that will offer both a greater experience to customers and the company.</p>
            <p>I have grit and determination, if I am working on a task I have both the passion and drive to execute the best product possible. I have learnt about the importance of details, focusing and failing fast to produce the best product in the most efficient amount of time. My ability to forward think helps me be one step ahead of the problem, anticipating issues and observing what the customer needs.</p>
        </div>
    )
}

export default Profile