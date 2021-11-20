import Project from '../Project';
import Img1 from '../../images/art1.jpg';
import Img2 from '../../images/nextflix.png';
import Img3 from '../../images/budget_tracker1.png';
import Img4 from '../../images/fitness_tracker1.png';
import Img5 from '../../images/Note-Taker1.png';
import Img6 from '../../images/teamGenerator.png';

let Portfolio = (props) => {

  return (
    <>
      <div id='portfolioContainer'>
        <Project fileName= {Img1} altText= 'Fine Arts Website' imageName= 'The Gary Almes Institute of Fine Arts' deploymentLink= 'https://bootcamp-2nd-proj.herokuapp.com/create-user' githubRepoLink= 'https://github.com/andrewtrudeau/bootcamp-project-2' /><br/>
        <Project fileName= {Img2} altText= 'Nextflix main page with most popular movies' imageName= 'NextFlix' deploymentLink= 'https://cleadi.github.io/nextflix/' githubRepoLink= 'https://github.com/cleadi/nextflix' /><br/>
        <Project fileName= {Img3} altText= 'A budget tracker PWA' imageName= 'Budget Tracker' deploymentLink= 'https://budget-tracker-hw19.herokuapp.com/' githubRepoLink= 'https://github.com/TannerOliver/hw19-budget-tracker' /><br/>
        <Project fileName= {Img4} altText= 'A fitness tracker app main page' imageName= 'Fitness Tracker' deploymentLink= 'https://workout-trackerhw18.herokuapp.com/' githubRepoLink= 'https://github.com/TannerOliver/hw18-workout-tracker' /><br/>
        <Project fileName= {Img5} altText= 'A note taking app' imageName= 'Note Taker' deploymentLink= 'https://hw11-note-taker-to.herokuapp.com/' githubRepoLink= 'https://github.com/TannerOliver/hw11-Note-Taker' /><br/>
        <Project fileName= {Img6} altText= 'A team building application' imageName= 'Team Profile Generator' deploymentLink= 'https://github.com/TannerOliver/hw10-Team-Profile-Generator' githubRepoLink= 'https://github.com/TannerOliver/hw10-Team-Profile-Generator' /><br/>
      </div>
    </>
  )
};

export default Portfolio;