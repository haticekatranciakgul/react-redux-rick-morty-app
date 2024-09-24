import '../../src/App.css';
import { Outlet } from "react-router-dom";
import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from './Navbar';
import Container from '@mui/material/Container';

function App() {
    const [theme, colorMode] = useMode();
    return (
        <div className="App">
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Navbar>
                    </Navbar>
                    <Container>
                        <Outlet />
                    </Container>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </div>
    );
}

export default App;
