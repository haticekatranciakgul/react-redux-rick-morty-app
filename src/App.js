import './App.css';
import Home from './pages/Home/index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Episodes from "./pages/Episodes/index";
import Detail from "./pages/Detail/index";
import Characters from './pages/Characters/index'


function App() {

  return (
    <div className="App">
       <BrowserRouter>
        
        <Routes>
          <Route  path="/" element={<Home />}>
          <Route path="/" element={<Characters />} />
          <Route path="/character/:id" element={<Detail />} />
          <Route path="/locations" component={Location} />
          <Route path="/episodes" component={Episodes} />
          
          
        </Route>
         
        </Routes>
      </BrowserRouter>
      {/* <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/character/:id" component={Detail} />
              <Route path="/locations" component={Location} />
              <Route path="/episodes" component={Episodes} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </ColorModeContext.Provider> */}
    </div>
  );
}

export default App;










