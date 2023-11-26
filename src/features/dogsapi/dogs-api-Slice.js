import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const PRODUCTS_API_KEY = 'products';

export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery:  fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com',
        prepareHeaders(headers){
            // headers.set('x-api-key',PRODUCTS_API_KEY);
            return headers;
        }
    }),


    endpoints(builder){
        return{
            fetchAllProducts: builder.query({
                query: () => PRODUCTS_API_KEY
            }),
            fetchProductByid: builder.query({
                query(id){
                    return{
                        url: `products/${id}`
                    }
                }
            })
        }
    }
})



export const {
    useFetchAllProductsQuery,
    useFetchProductByidQuery
} = apiSlice;