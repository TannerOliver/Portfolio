let Resume = (props) => {

  return (
    <>
      <div id='resumeHeader'>
        <h4>
          Link to my Indeed resume &nbsp;
          <a href='https://my.indeed.com/p/tannero-62l0g13'>
            Here
          </a>
        </h4>
      </div>
      <ul id='frontEnd'>
        <h3>Front End:</h3><br/>
        <p id='frontEndP'>HTML</p><br/>
        <p id='frontEndP'>CSS</p><br/>
        <p id='frontEndP'>JavaScript</p><br/>
        <p id='frontEndP'>React</p><br/>
        <p id='frontEndP'>Git</p><br/>
      </ul>
      <ul id='backEnd'>
        <h3>Back End:</h3><br/>
        <p>Node</p><br/>
        <p>MySQL</p><br/>
        <p>MongoDB</p><br/>
        <p>Express</p><br/>
        <p>Sequelize</p><br/>
      </ul>
    </>
  )
};

export default Resume;