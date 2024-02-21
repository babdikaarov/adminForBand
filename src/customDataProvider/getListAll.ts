import { fetchUtils, GetListParams, GetListResult, Options } from "react-admin";

export const getListAll = async (url: string, resource: string, params?: GetListParams): Promise<GetListResult> => {
    try {
        const token = JSON.parse(localStorage.user).token;
        const headers = new Headers();
        headers.set("Authorization", `Bearer ${token}`);
        let response;
        switch (resource) {
            case "auth":
                response = await fetchUtils.fetchJson(`${url}/${resource}/getAllUsers`, {
                    ...params,
                    headers,
                } as Options);
                break;
            default:
                response = await fetchUtils.fetchJson(`${url}/${resource}`, params as Options);
                break;
        }

        const { json } = response;

        //   const transformedArray = Object.keys(json).map((key) => {
        //     return { id: json[key], [key]: null };
        //   });

        //   console.log(transformedArray);

        if (Array.isArray(json)) {
            return {
                data: json,
                total: json.length,
            };
        } else {
            const data = [json];
            return {
                data,
                total: data.length,
            };
        }
    } catch (error) {
        console.error("Error in getList:", error);
        return Promise.reject(error);
    }
};

// getListAll("http://209.38.228.54:8080/api", "about_us_studio", {
//    pagination: { page: 1, perPage: 2 },
//    sort: { field: "id", order: "DESC" },
//    filter: { id: 1 },
// })()
//    .then((result) => {
//       console.log("Data:", result);
//       // console.log("Total:", result.total);
//    })
//    .catch((error) => {
//       console.error("Error:", error);
//    });

// [
//    {
//       id: 1,
//       longitude: null,
//       latitude: null,
//       city: null,
//       organizationId: null,
//       address: null,
//       bandNumber: null,
//       studioNumber: null,
//       email: null,
//       telegram: null,
//       whatsapp: null,
//       instagram: null,
//       youtube: null,
//       tiktok: null,
//    },
// ];

// [
//    {
//       id: 1,
//       _id: 1,
//    },
//    {
//       id: 2,
//       longitude: null,
//    },
//    {
//       id: 3,
//       latitude: null,
//    },
//    {
//       id: 4,
//       city: null,
//    },
//    ...etc,
// ];
