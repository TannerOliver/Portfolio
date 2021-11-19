import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Navigation from './Navigation';

let Container = (props) => {

  const[currentPage, setCurrentPage] = useState('AboutMe')

  const renderPage = () => {
    if (currentPage === '#about') {
      return <AboutMe />;
    } else if (currentPage === '#contact'){
      return <Contact />;
    } else if (currentPage === '#resume'){
      return<Resume />;
    } else if (currentPage === '#portfolio'){
      return<Portfolio />
    }
  };
  const handlePageChange = (currentPage) => {
    setCurrentPage(currentPage)
  };

  return (
    <>
      <div className= 'Header'>
        <Header/>
        <Navigation currentPage= {currentPage} handlePageChange={handlePageChange} />
      </div>
      {renderPage()}
      <Footer />
    </>
  )
};

export default Container;