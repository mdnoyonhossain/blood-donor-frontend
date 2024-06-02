import { tagTypes } from '../tag-types';
import { baseApi } from './baseApi';

export const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        userLogin: build.mutation({
            query: (loginData) => ({
                url: `/login`,
                method: 'POST',
                data: loginData,
            }),
            invalidatesTags: [tagTypes.user],
        }),
        changePassword: build.mutation({
            query: (data) => ({
                url: `/change-password`,
                method: 'POST',
                contentType: 'application/json',
                data: data,
            }),
            invalidatesTags: [tagTypes.user],
        }),
        getAllUser: build.query({
            query: () => ({
                url: `/all-user`,
                method: 'GET',
            }),
            providesTags: [tagTypes.user],
        }),
        updateUserStatus: build.mutation({
            query: (data) => ({
                url: `/update-user-staus/${data.id}`,
                method: "PUT",
                data: data.data
            }),
            invalidatesTags: [tagTypes.user]
        }),
    }),
});

export const {
    useUserLoginMutation,
    useChangePasswordMutation,
    useGetAllUserQuery,
    useUpdateUserStatusMutation
} = authApi;