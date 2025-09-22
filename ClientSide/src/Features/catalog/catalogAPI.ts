import { createApi } from "@reduxjs/toolkit/query/react";
import {baseQueryWithErrorHandling} from "../../App/api/baseApi";
import type { Product } from "../../App/Models/Products";
import type { ProductParams } from "../../App/Models/productParams";
import { filterEmptyValues } from "../../lib/util";
import type { Pagination } from "../../App/Models/pagination";



export const catalogApi = createApi({
    reducerPath: "catalogApi",
    baseQuery: baseQueryWithErrorHandling,
    endpoints: (builder) => ({
        fetchProducts: builder.query<{items: Product[], pagination: Pagination | null}, ProductParams>({
            query: (productParams) => {
                return {
                    url: 'products',
                    params: filterEmptyValues(productParams)
                }
            },
            transformResponse:(items: Product[], meta) => {
                const paginationHeader = meta?.response?.headers.get('Pagination')
                const pagination = paginationHeader ? JSON.parse(paginationHeader): null;
                return {items, pagination}
            }
          }),
            fetchProductDetails: builder.query<Product, number>({
                query: (productId) =>  `products/${productId}` 
            }),
            fetchFilters: builder.query<{brands: string[], types: string[]},void>({
                query: () => 'products/filters'
            })
        })
    });

    export const { useFetchProductDetailsQuery, useFetchProductsQuery, useFetchFiltersQuery } = catalogApi;