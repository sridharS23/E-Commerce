import { Box } from "@mui/material";
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
