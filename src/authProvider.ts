import { AuthProvider, HttpError, fetchUtils } from "react-admin";

const httpClient = fetchUtils.fetchJson;
const apiUrl = import.meta.env.VITE_COOL_API;

export const authProvider: AuthProvider = {
    login: async ({ username, password }) => {
        const { json } = await httpClient(`${apiUrl}/auth/signIn`, {
            method: "POST",
            body: JSON.stringify({ email: username, password }),
        });
        if (json) {
            localStorage.setItem("user", JSON.stringify({ ...json, authenticated: true, fullName: json.fullName }));
            localStorage.setItem("role", json.role);
            return Promise.resolve();
        }

        localStorage.removeItem("user");
        return Promise.reject(
            new HttpError("Unauthorized", 401, {
                message: "Invalid username or password",
            }),
        );
    },

    logout: () => {
        localStorage.removeItem("user");
        localStorage.removeItem("role");
        localStorage.removeItem("reset");
        return Promise.resolve();
    },

    checkError: () => Promise.resolve(),

    checkAuth: () => (localStorage.getItem("user") ? Promise.resolve() : Promise.reject()),
    getPermissions: () => {
        const role = localStorage.getItem("role");
        return Promise.resolve(role);
    },

    getIdentity: () => {
        const persistedUser = localStorage.getItem("user");
        const user = persistedUser ? JSON.parse(persistedUser) : null;

        return Promise.resolve(user);
    },
};

export default authProvider;
