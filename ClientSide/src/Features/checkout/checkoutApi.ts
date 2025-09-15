import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithErrorHandling } from "../../App/api/baseApi";
import type { Basket } from "../../App/Models/basket";
import { basketApi } from "../basket/basketApi";

export const checkoutApi = createApi({
    reducerPath: 'checkoutApi',
    baseQuery: baseQueryWithErrorHandling,
    endpoints: (builder) => ({
        createPaymentIntent: builder.mutation<Basket, void>({
            query: () => {
                return {
                    url: 'payment',
                    method: 'POST'
                }
            },
            onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        basketApi.util.updateQueryData('fetchBasket', undefined, (draft) => {
                            draft.clientSecret = data.clientSecret
                        })
                    )
                } catch (error) {
                    console.log('Payment intent creation failed: ', error)
                }
            }
        })
    })
});

export const {useCreatePaymentIntentMutation} = checkoutApi;