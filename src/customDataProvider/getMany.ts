import { fetchUtils, GetManyParams, GetManyResult } from "react-admin";

export const getMany = async (url: string, resource: string, params: GetManyParams): Promise<GetManyResult> => {
    const { ids } = params;

    try {
        const promises = ids.map(async (id) => {
            const { json } = await fetchUtils.fetchJson(`${url}/${resource}/${id}`);
            return json;
        });
        const data = await Promise.all(promises);
        console.log(data);
        return {
            data,
        };
    } catch (error) {
        console.error("Error in getMany:", error);
        return Promise.reject(error);
    }
};

// getMany("http://209.38.228.54:8080/api", "why_us_band", { ids: [1, 2] })()
//   .then((result) => {
//     console.log("Data:", result.data);
//     // console.log("Total:", result.total);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
