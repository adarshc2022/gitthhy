import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import User from './pages/User';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/user" element={<User/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
