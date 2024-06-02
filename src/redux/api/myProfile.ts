import { baseApi } from './baseApi';
import { tagTypes } from '../tag-types';

export const profileAPi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMYProfile: build.query({
            query: () => {
                return {
                    url: '/my-profile',
                    method: 'GET',
                };
            },
            providesTags: [tagTypes.user],
        }),
        updateMyProfile: build.mutation({
            query: (data) => {
                return {
                    url: '/my-profile',
                    method: 'PUT',
                    data: data?.data
                };
            },
            invalidatesTags: [tagTypes.user],
        }),
    }),
});

export const { useGetMYProfileQuery, useUpdateMyProfileMutation } = profileAPi;