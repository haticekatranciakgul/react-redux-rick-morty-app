import './App.css';
import Home from './pages/Home/index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Episodes from "./pages/Episodes/index";
import Detail from "./pages/Detail/index";
import Locations from "./pages/Locations/index";
import Characters from './pages/Characters/index'


function App() {

  return (
    <div className="App">
      <BrowserRouter basename='/react-redux-rick-morty-app'>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Characters />} />
            <Route path="/character/:id" element={<Detail />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/episodes" element={<Episodes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;










