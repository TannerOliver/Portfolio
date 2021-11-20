import img7 from '../../images/tanner.jpg';

let AboutMe = (props) => {
//  Add photo of me
  return (
    <>
      <img src={img7} alt='Tanner' id='aboutImg'></img>
      <p>
        I am a student attending the Uniersity of Minnesota's full-stack flex bootcamp. So far I have learned some HTML, 
        CSS, JS, Jquery and Bootstrap. We recently started learning how to use API's. I just got done creating my first project.
        My group and I decided to make a digital bookshelf of movies.
        I decided to attend this bootcamp because I wanted a change in my career.
      </p>
      <p>
        I decided to attend this bootcamp because I wanted a change in my career. I have always been in the retail/sales field before this bootcamp.
        I knew I always wanted to be in the computer field growing up and always being the one in the family that got the technology questions it came natrually.
        In my previous college experiences I tried machining and nursing but when the pandemic hit I decided to stop going to school. Eventually I knew I would go back
        which is why I decided to try out this bootcamp. I helped many family and friends build computers and have a general interest in the hardware side of computers.
      </p>
    </>
  )
};

export default AboutMe;