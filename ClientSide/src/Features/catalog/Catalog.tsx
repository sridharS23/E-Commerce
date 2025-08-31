import type { Product } from "../../App/Models/Products";

import ProductList from "./ProductList";

type Props = {
  products: Product[];
//   addproduct: () => void;
}
export default function Catalog({products }: Props) {
  return (
    <>
       <ProductList products= {products}/>
      
    </>
  )
}
