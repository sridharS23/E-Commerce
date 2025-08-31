import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

type Props = {
   toggleDarkMode: () => void;
  darkMode: boolean;
}

function NavBar({ darkMode, toggleDarkMode }: Props) {
  // const darkMode = false;
  return (
   <AppBar position="fixed">
    <Toolbar>
        <Typography variant="h6">REACT-STORE</Typography>
        <IconButton onClick={toggleDarkMode} >
          {darkMode ? <DarkMode /> : <LightMode sx={{color: 'yellow'}}/>}
        </IconButton>
    </Toolbar>
   </AppBar>
  )
}

export default NavBar
