import { DeleteManyParams, DeleteManyResult } from "react-admin";

export const deleteMany = async (url: string, resource: string, params: DeleteManyParams): Promise<DeleteManyResult> => {
    const { ids } = params;
    // console.log(ids);

    try {
      const token = JSON.parse(localStorage.user).token;
      const encoder = new TextEncoder();
      const jsonData = JSON.stringify(ids);
      const contentLength = encoder.encode(jsonData).length;

      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Content-Length": contentLength.toString(),
      };

      const parameters = {
        method: "DELETE",
        headers,
        body: jsonData,
      };

      const promises = ids.map(async (id) => {
        const response = await fetch(`${url}/${resource}/${id}`, parameters);
        const responseData = await response.json();
        return responseData;
      });

      const data = await Promise.all(promises);
      //   console.log(data);
      return {
        data,
      };
    } catch (error) {
      console.error("Error in deleteMany:", error);
      return Promise.reject(error);
    }
};

// const options = { ids: [1, 2] };

// deleteMany("http://209.38.228.54:8080/api", "why_us_band", options)()
//   .then((result) => {
//     console.log("Data:", result);
//     // console.log("Total:", result.total);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
