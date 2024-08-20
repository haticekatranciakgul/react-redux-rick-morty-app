
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/user" element = {<User />} />
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
