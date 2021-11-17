//image
//title
//link to deployment
//link to GitHub Repo
let Project = (props) => {

  return (
    <>
      <img src={props.fileName} alt={props.altText}></img>
      <p>{props.imageName}</p>
      <a href={props.deploymentLink} target= '_blank' >Check out my deployed app!</a>
      <a href={props.githubRepoLink} target= '_blank' >Check out my Github Repo</a>
    </>
  )
};

export default Project;