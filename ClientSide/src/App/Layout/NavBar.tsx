import { AppBar, Badge, Box, IconButton, LinearProgress, List, ListItem, Toolbar, Typography } from "@mui/material";
import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/store";
import { setDarkMode } from "./uiSlice";
import { useFetchBasketQuery } from "../../Features/basket/basketApi";

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


function NavBar() {

  const {isLoading, darkMode} = useAppSelector(state => state.ui);
  const dispatch = useAppDispatch();
  const {data: basket} = useFetchBasketQuery();

  const itemCount = basket?.items.reduce((sum, item)=> sum + item.quantity,0) || 0;

  return (
   <AppBar position="fixed">
    <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    <Box display='flex' alignItems='center'>
      <Typography component={NavLink} sx={navstyle} to={'/'} variant="h6">REACT-STORE</Typography>
        <IconButton onClick={() => dispatch(setDarkMode())} >
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
          
        <IconButton component={Link} to='/basket' size="large" sx={{color: 'inherit'}} >
          <Badge badgeContent={itemCount} color="secondary">
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

    {isLoading && (
      <Box sx={{width: '100%'}}>
         <LinearProgress color="secondary" />
      </Box>
    )}
   </AppBar>
  )
}

export default NavBar
