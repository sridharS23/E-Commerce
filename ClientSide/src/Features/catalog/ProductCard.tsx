import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
// Update the import path below to the correct location of your Product type
// For example, if the file is actually at 'src/App/Models/Products.ts', use the following:
import type { Product } from "../../App/Models/Products"
import { Link } from "react-router-dom"
// Or, if you have a types folder, adjust accordingly:
// import type { Product } from "../../types/Products"

type props ={
    product: Product
}
export default function productCard({product}:props) {
  return (
    
     <Card
      elevation={3}
      sx={{width: 280,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"   
      }}>
        <CardMedia
            sx={{height:240, backgroundSize: "cover"}}
            image={product.pictureUrl}
            title={product.name}
            />
            <CardContent>
               <Typography gutterBottom 
               sx={{textTransform: "uppercase"}}
               variant="subtitle2">
                {product.name}
               </Typography>
               <Typography variant="h6" sx={{color :"secondary.main"}}>
                ${(product.price/100).toFixed(2)}
               </Typography>
            </CardContent>
            <CardActions 
            sx={{justifyContent:"space-between"}}>
                <Button >Add to cart</Button>
                <Button component={Link} to={`/catalog/${product.id}`}>View</Button>
            </CardActions>
            </Card>
    
  )
}
