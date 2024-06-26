import './styles/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Project';
import Interests from './components/Interests';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Education></Education>
      <Skills></Skills>
      <Projects></Projects>
      <Interests></Interests>
      <Footer></Footer>
    </div>
  );
}

export default App;
