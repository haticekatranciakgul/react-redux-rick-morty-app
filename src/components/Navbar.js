import React from "react";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import { useTheme, Box, IconButton, InputBase, Typography } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Navbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    const handleClick = (e) => {
        e.preventDefault();
        colorMode.toggleColorMode(); // Mode'u değiştiren fonksiyon
        console.log("toggleColorMode tıklandı")
    }

    return (
        <Box display="flex" justifyContent="space-between" p={2} backgroundColor={'#1212124f'}>
            <Box display="flex">
                <Box
                    display="flex"
                    backgroundColor={colors.primary[400]}
                    p={0.2}
                    borderRadius={1}
                >
                    <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
                    <IconButton type="button">
                        <SearchIcon />
                    </IconButton>
                </Box>
            </Box>
            <Box display="flex" textAlign={'center'} alignItems={'center'}>
                <Typography variant="h4" paddingRight={2}>
                    <Link to={`/`}>CHARACTERS</Link>
                </Typography>
                <Typography variant="h4" paddingRight={2}>
                    <Link to={`/episodes`}>EPİSODES</Link>
                </Typography>
                <Typography variant="h4" paddingRight={2}>
                    <Link to={`/locations`}>LOCATİONS</Link>
                </Typography>
            </Box>
            

            <Box display="flex">
                <IconButton onClick={handleClick}>
                    {theme.palette.mode === "dark" ? (

                        <LightModeOutlinedIcon />
                    ) : (
                        <DarkModeOutlinedIcon />
                    )}
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Navbar;