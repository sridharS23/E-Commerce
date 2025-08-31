import React from "react"
import type { Product } from "../Models/Products";
import Catalog from "../../Features/catalog/Catalog";
import NavBar from "./NavBar";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";

// const products = [
//     {name: 'Product 1', price: 29.99, description: 'This is product 1'},
//     {name: 'Product 2', price: 39.99, description: 'This is product 2'},
//     {name: 'Product 3', price: 19.99, description: 'This is product 3'} 
// ] --initial hardcoded data... now move to useState initaializer

// function App() {
//  const [products, setProducts] = React.useState([{name: 'Product 1', price: 29.99, description: 'This is product 1'},
// {name: 'Product 2', price: 39.99, description: 'This is product 2'},
// {name: 'Product 3', price: 19.99, description: 'This is product 3'}]) // useState initializer

function  App() {
 const [products, setProducts] = React.useState<Product[]>([]);
 const [darkMode, setDarkMode] = React.useState(false);
//  const darkMode = true;
 const palatteType = darkMode ? 'dark' : 'light';

 const theme = createTheme({
  palette: {
    mode: palatteType,
    background: {
      default: palatteType === 'light' ? '#eaeaea' : '#121212'}
}});
  
const toggleDarkMode = () => {
  setDarkMode(!darkMode);
}

  React.useEffect(() => {
    fetch("https://localhost:5002/api/products")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));

      return () => {
        // Cleanup if needed when component unmounts
      }
  }, []) // empty dependency array to run only once on mount



// const addproduct = () => {
//   setProducts(prevState =>[...prevState, 
//     { id: (prevState.length +1),
//       name: 'Product '+(prevState.length +1), 
//       price: (prevState.length *45.54), 
//       description: 'This is product '+ (prevState.length +1),
//       quantityInStock: 10,
//       brand: 'BrandX',
//       type: 'TypeY',
//       pictureUrl: 'http://example.com/product.jpg'
//     }])
// }


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <NavBar toggleDarkMode= {toggleDarkMode} darkMode={darkMode}/>
    <Box sx={{minHeight: "100vh",
    background: darkMode 
  ? 'radial-gradient(circle, #2b5876, #1c1c1c)' 
  : 'radial-gradient(circle, #a1c4fd, #c2e9fb)',
  py: 4
    }} >
    <Container maxWidth="xl" sx={{mt: 10}}>
    <Catalog products={products} />
    </Container>
    </Box>
    </ThemeProvider>
  )
}

export default App
