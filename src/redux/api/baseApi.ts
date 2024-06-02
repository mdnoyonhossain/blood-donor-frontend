import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery';
import { createApi } from '@reduxjs/toolkit/query/react'
import { tagTypesList } from '../tag-types';

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: axiosBaseQuery({ baseUrl: 'https://blood-donation-server-orpin.vercel.app/api' }),
    endpoints: () => ({}),
    tagTypes: tagTypesList
});