import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithErrorHandling } from "../../App/api/baseApi";
import type { CreateOrder, Order } from "../../App/Models/order";

export const  orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: baseQueryWithErrorHandling,
    endpoints: (builder) => ({
        fetchOrders: builder.query<Order[], void>({
            query: () => 'orders'
        }),
        fetchOrderDetailed: builder.query<Order, number>({
            query: (id) => ({
                url: `order/${id}`
            })
        }),
        createOrder: builder.mutation<Order, CreateOrder>({
            query: (order) => ({
                url: 'order',
                method: 'POST',
                body: order
            })
        })
    })
})

export const {useFetchOrdersQuery, useFetchOrderDetailedQuery,useCreateOrderMutation} = orderApi 