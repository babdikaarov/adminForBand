import { fetchUtils, GetListParams, GetListResult, Options } from "react-admin";

export const getListAll = (url: string, resource: string, params?: GetListParams) => {
   return async (): Promise<GetListResult> => {
      try {
         const { json } = await fetchUtils.fetchJson(`${url}/${resource}`, params as Options);
         return {
            data: json,
            total: json.length,
         };
      } catch (error) {
         console.error("Error in getList:", error);
         return Promise.reject(error);
      }
   };
};

// getListAll("http://209.38.228.54:8080/api", "event_studio_images", {
//   pagination: { page: 1, perPage: 2 },
//   sort: { field: "id", order: "DESC" },
//   filter: { id: 1 },
// })()
//   .then((result) => {
//     console.log("Data:", result);
//     // console.log("Total:", result.total);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
