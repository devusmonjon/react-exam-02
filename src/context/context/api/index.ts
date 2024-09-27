import {
  createApi,
  fetchBaseQuery,
  retry,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
// import { logout } from '../slices/authSlice';

// baseQuery funksiyasi
const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: "https://headphones-server.onrender.com",
  });

  const result = await rawBaseQuery(args, api, extraOptions);
  return result;
};

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const api = createApi({
  reducerPath: "myApi",
  baseQuery: baseQueryWithRetry,
  tagTypes: ["Product", "Brand", "Color"],
  endpoints: () => ({}),
});
