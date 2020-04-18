import React from 'react';
import Project from '../../components/project/project'
import Leaguelogo from '../../assets/images/league-finder.jpg'
import Janelogo from '../../assets/images/janelogo.jpg'

function Portfolio(){

    return(
        <div role="main" className= "container mb-5 p-1" style={{maxHeight: 'fit-content'}}>
        <div className= "container contentbackground myborder mx-sm-auto">
            <div className= "row d-flex align-content-center">
                <div className= "col-md-12">
                    <h1 className= "border-bottom mx-auto">Portfolio</h1>
                </div>
            </div>
            <br></br>
        <Project projectTitle= "League Finder" projectSubtitle= "First Github Project" projectText= "In this project we set out to inform our users of upcoming tournaments in cs:go and league of legends. We had dedicated pages for each. Click on the image to check out our page." projectLink= "https://github.com/israelb213/project_one" projectUrl="https://israelb213.github.io/project_one/"code={Leaguelogo} projectName="Github Project" />

        <Project projectTitle= "Jane's Essentials" projectSubtitle="Second Github Project" projectText= "In this project we set out to inform our users of the different Marijuana strains avaliable as well as informing them of medical uses and whether they have positive or negative effects. We had dedicated pages for each type of strain. We aslo included a page that shows all of the strains we have in our database. Click on the image to find out more" projectLink= "https://github.com/DillTurner/project-2" projectUrl="https://tranquil-shore-14378.herokuapp.com/index.html" code={Janelogo} projectName="Github Project" />

        <Project projectTitle= "New York Times" projectText= "This application allows a user to plan their day." projectLink= "https://github.com/DillTurner/DailyPlanner"  projectUrl="https://dillturner.github.io/DailyPlanner/" projectName="Daily Planner" />

       
            
                
                
            
        </div>
        </div>
    )
}

export default Portfolio;