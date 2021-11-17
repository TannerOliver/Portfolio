// when I create different componets import here
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';
// when I get CSS done import that here

function App() {
  return (
    <div className="placeholder">
      <Header />
      <Navigation />
      <Project fileName= 'placeholder' altText= 'Test' imageName= 'Test Name' deploymentLink= 'www.google.com' githubRepoLink= 'www.google.com' />
      <Footer />
    </div>
  );
}

export default App;


