import { Grid2, Typography } from "@mui/material";
import ProductList from "./ProductList";
import Filters from "./Filters";
import { setPageNumber } from "./catalogSlice";
import { useFetchFiltersQuery, useFetchProductsQuery } from "./catalogAPI";
import { useAppDispatch, useAppSelector } from "../../App/store/store";
import AppPagination from "../../App/shared/components/AppPagination";

export default function Catalog() {
  const productParams = useAppSelector(state => state.catalog);
  const {data, isLoading} = useFetchProductsQuery(productParams);
  const {data: filtersData, isLoading: filtersLoading} = useFetchFiltersQuery();
  const dispatch = useAppDispatch();

  if (isLoading || !data || filtersLoading || !filtersData) return <div>Loading...</div>

  return (
    <Grid2 container spacing={4}>
      <Grid2 size={3}>
        <Filters data={filtersData} />
      </Grid2>
      <Grid2 size={9}>
        {data.items && data.items.length > 0 ? (
          <>
            <ProductList products={data.items} />
            {data.pagination && (
              <AppPagination
                metadata={data.pagination}
                onPageChange={(page: number) => {
                  dispatch(setPageNumber(page));
                  window.scrollTo({top: 0, behavior: 'smooth'})
                }}
              />
            )}
          </>
        ) : (
          <Typography variant="h5">There are no results for this filter</Typography>
        )}
      </Grid2>
    </Grid2>
  )
}