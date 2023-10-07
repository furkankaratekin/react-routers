import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import Users from './components/Users';
import User from './components/User';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="menu">
          <Link to="/">
            <h1>Home</h1>
          </Link>

          <Link to="/about">
            <h1>About</h1>
          </Link>

          <Link to="/contact">
            <h1>Contact</h1>
          </Link>
          <Link to="/users">
            <h1>Users</h1>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path='/users' element={<Users />}/>
          <Route path='/users/:id' element={<User />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
