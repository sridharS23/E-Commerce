import { Box, Button, Paper, Typography } from "@mui/material";
import Search from "./Search";
import RadioButtonGroup from "../../App/shared/components/RadioButtonGroup";
import { useAppDispatch, useAppSelector } from "../../App/store/store";
import { resetParams, setBrands, setOrderBy, setTypes } from "./catalogSlice";
import CheckboxButtons from "../../App/shared/components/CheckboxButtons";


const sortOptions = [
     {value: 'name', label: 'Alphabetical'},
     {value: 'priceDesc', label: 'Price: High to Low'},
     {value: 'price', label: 'Price: Low to High'},]

type Props = {
    data: {
        brands: string[];
        types: string[];
    }
}

export default function Filters({data: data}: Props) {

    const {orderBy, types, brands} = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();

    if (!data?. brands || !data.types) return<Typography>Loading...</Typography>

  return (
   
    
      <Box display='flex' flexDirection='column' gap={3}>
            <Paper>
                <Search/>
            </Paper>
            <Paper sx={{p:3}}>
                <RadioButtonGroup
                    selectedValue={orderBy}
                    options={sortOptions}
                    onChange={e => dispatch(setOrderBy(e.target.value))}
                    />
            </Paper>
            <Paper sx={{p: 3}}>
                <CheckboxButtons
                    items={data.brands}
                    checked={brands}
                    onChange={(items: string[]) => dispatch(setBrands(items))}/>
            </Paper>
            
            <Paper sx={{p: 3}}>
                <CheckboxButtons
                    items={data.types}
                    checked={types}
                    onChange={(items: string[]) => dispatch(setTypes(items))}/>
            </Paper>
            <Button onClick={() => dispatch(resetParams())}>Reset Filters</Button>
      </Box>
    
  )
}
