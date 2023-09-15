import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './pages/Project';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <hr className='border-hr-gradient' />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
