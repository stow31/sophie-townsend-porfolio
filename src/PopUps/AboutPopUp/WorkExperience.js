import { useContext } from 'react'
import { PortfolioContext } from '../../PortfolioContext.js'

function WorkExperience(){

    const {
        workExperienceClassName
    } = useContext(PortfolioContext)

    return(
        <div className={workExperienceClassName}>
            <section className="experience-section">
                <div className="experience-header">
                    <img className="experience-logo" src="https://www.thedailyedited.com/static/version1581648374/frontend/MindArc/tde2/en_AU/images/tde-black-logo.png" alt="" />
                    <div className="experience-heading">
                        <h3>TECHNICAL PROJECT MANAGER</h3>
                        <p>The Daily Edited</p>
                        <p>2016 - 2021</p>
                    </div>
                </div>

                <ul className="experience-list">
                    <li>Implemented new software by identifying shortcomings in processes, data and behaviour. As a result of the shortcoming, I conducted reviews of internal processes and requirements. I evaluated these against products available in the market to assist with the issue, reviewing their integration requirements and financial impact on the business. The evaluation of options were presented to the directors, to enable their decision making in support of a system. When the business progressed with the product, I was responsible for the integration, user story testing, workflow breakdowns and training plans. Examples of systems include:</li>
                    <ul>
                        <li>A point-of-sale system that resulted in daily customers served to increase by 22%</li>
                        <li>An inventory management system that resulted in the average discrepancies during stocktake decrease by 41%</li>
                        <li>A loyalty program that resulted in the repeat purchase rate increase by 11%.</li>
                    </ul>
                    <li>Worked closely with the design team to implement creative website content including campaign and promotional landing pages using HTML, CSS and JavaScript to increase brand awareness and boost sales. When linking promotions and/or campaigns to a custom-built landing page we saw the bounce rate decreased by 15% compared to linking it to a category or home page.</li>
                    <li>Debugged upgrades and features through systematic tests to develop and maintain quality standards. Enabling the successful deployment of 96% of all upgrades and features.</li>
                    <li>Created standardised system of ongoing data reviews for project and promotion evaluation, using Google Analytics, Microsoft Excel and Hotjar. Enabled projects and promotions over time to be more data-driven.</li>
                </ul>
            </section>
        </div>
    )
}

export default WorkExperience