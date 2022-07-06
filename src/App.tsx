import React from 'react';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Header from './components/Header';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

function App() {
    return (
        <Router> 
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/resume' element={<Resume />} />
            </Routes>
        </Router>
    );
}

export default App;