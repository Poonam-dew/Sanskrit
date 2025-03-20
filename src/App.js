import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.js';
import FirstPage from './Pages/FirstPage.js';
import Home from './components/Home.jsx';
import Login from './Pages/Login.js';
import Event from './Pages/Event.js';
import LearningSanskrit from './Pages/LearningSanskrit.js';
import Courses from './Pages/Courses.js';
import Resources from './Pages/Resources.js';
import SaastraSetu from './Pages/SaastraSetu.js';
import SignUp from './components/SignUp.js';
import Team from './Pages/Team.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<FirstPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events" element={<Event />} />
          <Route path="/learningSanskrit" element={<LearningSanskrit />} />
          <Route path="courses" element={<Courses />} />
          <Route path="/ShaastraSetu" element={<SaastraSetu />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/" element={<Home />}></Route>

        </Routes>
        {/* <ToastContainer />
        <Footer /> */}
      </BrowserRouter>


    </div>
  );
}

export default App;
