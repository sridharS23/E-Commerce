import { createApi } from "@reduxjs/toolkit/query/react";
import {baseQueryWithErrorHandling} from "../../App/api/baseApi";
import type { Product } from "../../App/Models/Products";

export const catalogApi = createApi({
    reducerPath: "catalogApi",
    baseQuery: baseQueryWithErrorHandling,
    endpoints: (builder) => ({
        fetchProducts: builder.query<Product[], void>({
            query: () => ({ url: 'products' })
            }),
            fetchProduct: builder.query<Product, number>({
                query: (productId) => ({ url: `products/${productId}` })
            })
        })
    });

    export const { useFetchProductsQuery, useFetchProductQuery } = catalogApi; 