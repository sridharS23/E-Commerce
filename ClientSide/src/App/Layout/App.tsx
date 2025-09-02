import NavBar from "./NavBar";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../store/store";



function  App() {
const {darkMode} = useAppSelector(state => state.ui);
 const palatteType = darkMode ? 'dark' : 'light';

 const theme = createTheme({
  palette: {
    mode: palatteType,
    background: {
      default: palatteType === 'light' ? '#eaeaea' : '#121212'}
}});
  



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <NavBar />
    <Box sx={{minHeight: "100vh",
    background: darkMode 
  ? 'radial-gradient(circle, #2b5876, #1c1c1c)' 
  : 'radial-gradient(circle, #a1c4fd, #c2e9fb)',
  py: 4
    }} >
    <Container maxWidth="xl" sx={{mt: 10}}>
    <Outlet/>
    </Container>
    </Box>
    </ThemeProvider>
  )
}

export default App
