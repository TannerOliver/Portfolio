let Project = (props) => {

  return (
    <div id='projectCard'>
      <img src={props.fileName} alt={props.altText} id='projectImage'></img>
      <p>{props.imageName}</p>
      <div id='projectLink'>
        <a href={props.deploymentLink}>Check out my deployed app!</a><br/>
      </div>
      <div id='projectLink'>
        <a href={props.githubRepoLink} >Check out my Github repo</a><br/>
      </div>
    </div>
  )
};

export default Project;