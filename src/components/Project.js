let Project = (props) => {

  return (
    <>
      <img src={props.fileName} alt={props.altText}></img>
      <p>{props.imageName}</p>
      <a href={props.deploymentLink} >Check out my deployed app!</a><br/>
      <a href={props.githubRepoLink} >Check out my Github Repo</a><br/>
    </>
  )
};

export default Project;