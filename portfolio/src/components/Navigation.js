//About me
//Portfolio
//Contact
//Resume

let Navigation = ({ currentPage, handlePageChange}) => {

  return (
    <>
      <ul>
        <li>
          <a href='#about' onClick={ () => handlePageChange('#about')} className={currentPage === '#about'}>About me </a>
        </li>
        <li>
          <a href='#portfolio' onClick={ () => handlePageChange('#portfolio')}  className={currentPage === '#portfolio'}>Portfolio</a>
        </li>
        <li>
          <a href='#contact' onClick={ () => handlePageChange('#contact')} className={currentPage === '#contact'}>Contact</a>
        </li>
        <li>
          <a href='#resume' onClick={ () => handlePageChange('#resume')} className={currentPage === '#resume'}>Resume</a>
        </li>
      </ul>
    </>
  )
};

export default Navigation;