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
         localStorage.setItem("user", JSON.stringify({ ...json, fullName: json.role }));
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
      return Promise.resolve();
   },

   checkError: () => Promise.resolve(),

   checkAuth: () => (localStorage.getItem("user") ? Promise.resolve() : Promise.reject()),
   getPermissions: () => {
      return Promise.resolve(undefined);
   },

   getIdentity: () => {
      const persistedUser = localStorage.getItem("user");
      const user = persistedUser ? JSON.parse(persistedUser) : null;

      return Promise.resolve(user);
   },
};

export default authProvider;
