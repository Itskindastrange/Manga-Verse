import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Main from './components/main/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/Main' element={<Main/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
