import { Box } from "@mui/material";
// Update the import path below to the correct location of your Products model
import type { Product } from "../../App/Models/Products";
import ProductCard from "./ProductCard";

type props = {
    products: Product[];
  };

  
export default function ProductList({products}:props) {
  return (
   <Box sx={{display: "flex", flexWrap: "wrap", gap: 3, justifyContent: "center"}}>
        {products.map(products => (
         <ProductCard key={products.id} product={products}/>
        ))}
    </Box>
  )
}
