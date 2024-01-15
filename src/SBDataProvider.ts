import {
  CreateParams,
  DeleteManyParams,
  DeleteParams,
  GetListParams,
  GetManyParams,
  GetManyReferenceParams,
  GetOneParams,
  UpdateManyParams,
  UpdateParams,
  DataProvider,
  fetchUtils,
} from "react-admin";
import { stringify } from "query-string";

const httpClient = (url: string, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = JSON.parse(localStorage.getItem("user") || "")?.token;
  token && options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

function composeURL(url: string, resource: string, id?: string) {
  return `${url}/${resource}${id ? `/${id}` : ""}`;
}

const SBDataProvider = (apiUrl: string): DataProvider => {
  return {
    getList: async (resource: string, params: GetListParams) => {
      try {
        const { json } = await httpClient(`${apiUrl}/${resource}`);
        return {
          data: json,
          total: json.length,
        };
      } catch (error) {
        console.error("Error in getList:", error);
        return Promise.reject(error);
      }
    },

    getOne: async (resource: string, params: GetOneParams) => {
      const url = composeURL(apiUrl, resource, params.id);
      const { json } = await httpClient(url);
      return { data: json };
    },

    getMany: async (resource: string, params: GetManyParams) => {
      const query = {
        filter: `(id?=('${params.ids.join("','")}'))`,
      };
      const url = `${composeURL(apiUrl, resource)}?${stringify(query)}`;
      const { json } = await httpClient(url);
      return { data: json };
    },

    getManyReference: async (resource: string, params: GetManyReferenceParams) => {
      // Implementation not provided
      return {
        data: [],
        total: 0,
      };
    },

    create: async (resource: string, params: CreateParams) => {
      const { json } = await httpClient(`${apiUrl}/${resource}`, {
        method: "POST",
        body: JSON.stringify(params.data),
      });
      return { data: json };
    },

    update: async (resource: string, params: UpdateParams) => {
      const url = composeURL(apiUrl, resource, params.id);
      const { json } = await httpClient(url, {
        method: "PUT",
        body: JSON.stringify(params.data),
      });
      return { data: json };
    },

    updateMany: async (resource: string, params: UpdateManyParams) => {
      // Implementation not provided
      return { data: [] };
    },

    delete: async (resource: string, params: DeleteParams) => {
      const url = composeURL(apiUrl, resource, params.id);
      const { json } = await httpClient(url, {
        method: "DELETE",
      });
      return { data: json };
    },

    deleteMany: async (resource: string, params: DeleteManyParams) => {
      const promises = params.ids.map((id) => {
        try {
          const url = composeURL(apiUrl, resource, id);
          return httpClient(url, {
            method: "DELETE",
          }).then((res) => res.json);
        } catch (_) {
          return Promise.reject("failed to delete");
        }
      });

      return Promise.all(promises).then((results) => ({ data: results }));
    },
  };
};

export default SBDataProvider;
