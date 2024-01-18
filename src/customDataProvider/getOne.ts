import { fetchUtils, GetOneParams, GetOneResult } from "react-admin";

export const getOne = (url: string, resource: string, params: GetOneParams) => {
  return async (): Promise<GetOneResult> => {
    const id = params?.id;
    try {
      const { json } = await fetchUtils.fetchJson(`${url}/${resource}/${id}`);
      //   console.log(id);
      return {
        data: json,
      };
    } catch (error) {
      console.error("Error in getOne:", error);
      return Promise.reject(error);
    }
  };
};

// getOne("http://209.38.228.54:8080/api", "event_studio_images", { id: 1 })()
//   .then((result) => {
//     console.log("Data:", result);
//     // console.log("Total:", result.total);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
