import { useFetchProductsQuery } from "./catalogAPI";
import ProductList from "./ProductList";


export default function Catalog() {
  const {data, isLoading } = useFetchProductsQuery();

  if (isLoading || !data) return <h3>Loading...</h3>


  return (
    <>
       <ProductList products= {data}/>
      
    </>
  )
}
