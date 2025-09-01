// Update the import path below if your Product type is located elsewhere
import type { Product } from "../../App/Models/Products";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";

// type Props = {
//   products: Product[];
//   addproduct: () => void;
//}
export default function Catalog() {
  
 const [products, setProducts] = useState<Product[]>([]);
   useEffect(() => {
    fetch("https://localhost:5002/api/products")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));

      return () => {
        // Cleanup if needed when component unmounts
      }
  }, []) // empty dependency array to run only once on mount

  return (
    <>
       <ProductList products= {products}/>
      
    </>
  )
}
