import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const midLinks = [
  { title: 'catalog', path: '/catalog' },
  { title: 'about', path: '/about' },
  { title: 'contact', path: '/contact' }
]

const rightLinks = [
  { title: 'login', path: '/login' },
  { title: 'register', path: '/register' }
]

const navstyle = {color: 'inherit', typography: 'h6', textDecoration: 'none', '&:hover': {color: 'grey.500'},
            '&.active': { color: 'secondary.main' } }

type Props = {
   toggleDarkMode: () => void;
  darkMode: boolean;
}

function NavBar({ darkMode, toggleDarkMode }: Props) {
  // const darkMode = false;
  return (
   <AppBar position="fixed">
    <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    <Box display='flex' alignItems='center'>
      <Typography component={NavLink} sx={navstyle} to={'/'} variant="h6">REACT-STORE</Typography>
        <IconButton onClick={toggleDarkMode} >
          {darkMode ? <DarkMode /> : <LightMode sx={{color: 'yellow'}}/>}
        </IconButton>
    </Box>

        
        <List sx={{display: 'flex', flexDirection: 'row', ml: 2}}>
          {midLinks.map(({title, path}) => (
          <ListItem
            component={NavLink}
            to={path} 
            key={path}
            sx={navstyle}>
            {title.toUpperCase()}
          </ListItem>
        ))}
        </List>

        <Box display='flex'  alignItems='center'>
          
        <IconButton  size="large" sx={{color: 'inherit'}} >
          <Badge badgeContent={4} color="secondary">
              <ShoppingCart />
          </Badge>
        </IconButton>

         <List sx={{display: 'flex', flexDirection: 'row', ml: 2}}>
          {rightLinks.map(({title, path}) => (
          <ListItem
            component={NavLink}
            to={path} 
            key={path}
            sx={navstyle}>
            {title.toUpperCase()}
          </ListItem>
        ))}
        </List>
        </Box>

    </Toolbar>
   </AppBar>
  )
}

export default NavBar
