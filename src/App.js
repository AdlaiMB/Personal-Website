import './styles/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Education></Education>
    </div>
  );
}

export default App;
