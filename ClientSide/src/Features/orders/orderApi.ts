import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithErrorHandling } from "../../App/api/baseApi";
import type { CreateOrder, Order } from "../../App/Models/order";

export const  orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: baseQueryWithErrorHandling,
    tagTypes: ['orders'],
    endpoints: (builder) => ({
        fetchOrders: builder.query<Order[], void>({
            query: () => 'order',
            providesTags: ['orders']
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
            }),
            onQueryStarted: async (_, {dispatch, queryFulfilled}) => {
                await queryFulfilled;
                dispatch(orderApi.util.invalidateTags(['orders']))  
            }
        })
    })
})

export const {useFetchOrdersQuery, useFetchOrderDetailedQuery,useCreateOrderMutation} = orderApi 