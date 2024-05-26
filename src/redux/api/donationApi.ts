"use client"
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
        }),
        getIdByDonor: build.query({
            query: (id: string) => {
                return {
                    url: `/donor-list/${id}`,
                    method: 'GET',
                };
            },
            providesTags: [tagTypes.user],
        }),
        createDonorRequest: build.mutation({
            query: (data) => ({
                url: '/donation-request',
                method: 'POST',
                data,
            }),
            invalidatesTags: [tagTypes.doctorSchedule],
        }),
        getMyRequestDonor: build.query({
            query: () => {
                return {
                    url: '/donation-request',
                    method: 'GET'
                };
            },
            providesTags: [tagTypes.user],
        }),
        updateDonorStatus: build.mutation({
            query: (data) => ({
                url: `/donation-request/${data.id}`,
                method: "PUT",
                data: data
            }),
            invalidatesTags: [tagTypes.doctor, tagTypes.user]
        }),
    }),
});

export const {
    useGetAllDonorListQuery,
    useGetIdByDonorQuery,
    useCreateDonorRequestMutation,
    useGetMyRequestDonorQuery,
    useUpdateDonorStatusMutation
} = donationApi;