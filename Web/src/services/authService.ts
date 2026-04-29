import apiClient from "./apiClient";

type LoginPayload = {
    email: string;
    password: string;
};

type User = {
    id: number;
    email: string;
    name: string;
};

type LoginResponse = {
    user: User;
    token: string;
};

export const login = async (
    data: LoginPayload
): Promise<LoginResponse> => {
    const response = await apiClient.post("/auth/login", data);
    return response.data;
};