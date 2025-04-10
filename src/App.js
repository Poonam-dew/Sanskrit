import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './components/Home.jsx';
import Event from './Pages/Event.js';
import LearningSanskrit from './Pages/LearningSanskrit.js';
import Courses from './Pages/Courses.js';
import Resources from './Pages/Resources.js';
import SanskritFun from './Pages/SanskritFun.js';
import Team from './Pages/Team.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import mandala from './assets/background.png';


function App() {
  return (
    <>
     
      <div className="App">
      <img src={mandala} alt="Background" className="background-image" />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/events" element={<Event />} />
            <Route path="/learningSanskrit" element={<LearningSanskrit />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/team" element={<Team />} />
        <Route path="/sanskrit-fun" element={<SanskritFun/>}/>
          </Routes>
          <ToastContainer />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}


export default App;
