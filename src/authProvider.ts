import { AuthProvider, HttpError, fetchUtils } from "react-admin";

const httpClient = fetchUtils.fetchJson;
const apiUrl = import.meta.env.VITE_COOL_API;
// FIXME what to do whith role: USER functionality

export const authProvider: AuthProvider = {
    login: async ({ username, password }) => {
        const { json } = await httpClient(`${apiUrl}/auth/signIn`, {
            method: "POST",
            body: JSON.stringify({ email: username, password }),
        });
        if (json) {
            /* 
           user?: {
        authenticated?: boolean;
        token?: string;
    };
         */
            localStorage.setItem("user", JSON.stringify({ ...json, authenticated: true, fullName: json.role }));
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
