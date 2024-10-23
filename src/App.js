import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Courses from './components/Courses';
// import Gallery from './components/Gallery';
import Team from './components/Team';

function App() {
  return (
    <>
      <div className="App-bg">
        <Navbar />
        <Hero />
        <About />
        <Courses />
        {/* <Gallery /> */}
        <Team />
        <Footer />
      </div>
    </>
  );
}

export default App;
