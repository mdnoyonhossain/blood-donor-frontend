import { baseApi } from './baseApi';
import { tagTypes } from '../tag-types';

export const donationApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllDonorList: build.query({
            query: (arg: Record<string, any>) => {
                return {
                    url: '/donor-list',
                    method: 'GET',
                    params: arg,
                };
            },
            providesTags: [tagTypes.user],
        })
    }),
});

export const { useGetAllDonorListQuery } = donationApi;