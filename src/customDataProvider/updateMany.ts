import { UpdateManyParams, UpdateManyResult } from "react-admin";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const updateMany = async (url: string, resource: string, params: UpdateManyParams): Promise<UpdateManyResult> => {
    // const { ids } = params;
    // console.log(params, "FIXME", resource);
    try {
      return { data: [] };
      //   const token = JSON.parse(localStorage.user).token;
      //   const jsonData = JSON.stringify({ ids, ...data });
      //   console.log({ jsonData });
      //   const encoder = new TextEncoder();
      //   const contentLength = encoder.encode(jsonData).length;

      //   const headers = {
      //     Authorization: `Bearer ${token}`,
      //     "Content-Type": "application/json",
      //     "Content-Length": contentLength.toString(),
      //   };

      //   const parameters = {
      //     method: "PUT",
      //     headers,
      //     // body: jsonData,
      //   };
      //   const promises = ids.map(async (id) => {
      //     const promise = await fetch(`${url}/${resource}/${id}`, parameters);
      //     return promise;
      //   });
      //   const response = await Promise.all(promises);

      //   //   const response = await fetch(`${url}/${resource}/${id}`, parameters);

      //   //   const responseData = await response.json();
      //   console.log(response);

      //   return {
      //     data: [],
      //   };
    } catch (error) {
      console.error("Error in updateMany:", error);
      return Promise.reject(error);
    }
};

// const options = {
//   ids: [1, 2],
//   data: { title: "updateMany" },
// };

// updateMany("http://209.38.228.54:8080/api", "why_us_band", options)()
//   .then((result) => {
//     console.log("Data:", result);
//     // console.log("Total:", result.total);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
