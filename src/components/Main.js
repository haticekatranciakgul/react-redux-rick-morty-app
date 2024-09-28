import '../../src/App.css';
import { Outlet } from "react-router-dom";
import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from './Navbar';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import ScrollToTop from "react-scroll-to-top";


function App() {
    const [theme, colorMode] = useMode();
    return (
        <div className="App">
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Navbar>
                    </Navbar>
                    <Typography variant="h1" fontWeight={'bold'} margin={'20px'} >Rick and Morty</Typography>
                    <Container>
                        <Outlet />
                        <ScrollToTop smooth />
                    </Container>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </div>
    );
}

export default App;
