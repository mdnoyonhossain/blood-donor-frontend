import { authKey } from "@/constants/authKey";
import { instance as axiosInstance } from "@/helpers/axios/axiosInstance";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from "@/utils/local-storage"

export const storeUserInfo = async ({ accessToken }: { accessToken: string }) => {
    return setToLocalStorage(authKey, accessToken);
}

export const getUserInfo = () => {
    const authToken = getFromLocalStorage(authKey);
    if (authToken) {
        const decodedData: any = decodedToken(authToken);
        return {
            ...decodedData,
            role: decodedData?.role?.toLowerCase()
        }
    }
}

export const isLoggedIn = () => {
    const authToken = getFromLocalStorage(authKey);
    if (authToken) {
        return !!authToken;
    }
}

export const removeUser = () => {
    return removeFromLocalStorage(authKey);
}

export const getNewAccessToken = async () => {
    return await axiosInstance({
        url: "https://blood-donation-server-orpin.vercel.app/api",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        withCredentials: true
    });
}