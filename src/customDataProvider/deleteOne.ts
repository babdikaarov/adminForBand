import { DeleteParams, DeleteResult } from "react-admin";

export const deleteOne = async (url: string, resource: string, params: DeleteParams): Promise<DeleteResult> => {
    const { id } = params;
    console.log(params);
    try {
        const token = JSON.parse(localStorage.user).token;
        const encoder = new TextEncoder();
        const jsonData = JSON.stringify(id);
        const contentLength = encoder.encode(jsonData).length;
        console.log(jsonData);
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

        const response = await fetch(`${url}/${resource}/${id}`, parameters);

        const responseData = await response.json();
        console.log(responseData);

        return {
            data: responseData,
        };
    } catch (error) {
        console.error("Error in deleteOne:", error);
        return Promise.reject(error);
    }
};

// const options = {
//   id: 3,
//   previousData: { id: 3, title: "hello, world!" },
// };

// deleteOne("http://209.38.228.54:8080/api", "why_us_band", options)()
//   .then((result) => {
//     console.log("Data:", result);
//     // console.log("Total:", result.total);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
