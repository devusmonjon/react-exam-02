import { IProduct } from "@/interfaces";
import { api } from "./index";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<IProduct[], string>({
      query: (params) => ({
        url: `/products?${params}`,
      }),
      providesTags: ["Product"],
    }),
    getProductById: build.query<IProduct, string>({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["Product"],
    }),
    getBrands: build.query<string[], void>({
      query: () => ({
        url: "/brands",
      }),
      providesTags: ["Brand"],
    }),
    getColors: build.query<string[], void>({
      query: () => ({
        url: "/colors",
      }),
      providesTags: ["Color"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetBrandsQuery,
  useGetColorsQuery,
} = productApi;
