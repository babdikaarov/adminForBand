import { HttpError, UpdateParams, UpdateResult } from "react-admin";

export const updateOne = async (url: string, resource: string, params: UpdateParams): Promise<UpdateResult> => {
    const { id, data } = params;
    // console.log(url);
    // console.log(data);
    console.log(params);
    console.log(resource);

    try {
        const token = JSON.parse(localStorage.user).token;
        const encoder = new TextEncoder();
        const jsonData = JSON.stringify(data);
        const contentLength = encoder.encode(jsonData).length;

        const headers = new Headers();
        headers.set("Authorization", `Bearer ${token}`);
        headers.set("Content-Length", contentLength.toString());

        let parameters;
        // console.log(data);

        if (data instanceof FormData) {
            // if formaData exist assigned during lifeCycleCallBack

            parameters = {
                method: "PATCH",
                headers,
                body: data as FormData,
            };
            console.log(data);
            // console.log(parameters.body);
        } else {
            // if no media exist skip during lifeCycleCallBack
            headers.set("Content-Type", "application/json");
            parameters = {
                method: "PATCH",
                headers,
                body: jsonData,
            };
            // console.log(jsonData);
        }

        let response;

        switch (resource) {
            case "contacts":
            case "about_us_studio":
            case "about_us_band":
            case "hero_band":
            case "hero_studio":
                console.log(parameters);
                response = await fetch(`${url}/${resource}`, parameters);
                break;
            case "auth":
                parameters.method = "PUT";
                response = await fetch(`${url}/${resource}/${id}`, parameters);
                break;
            default:
                // console.log(parameters);
                // console.log(resource)
                response = await fetch(`${url}/${resource}/${id}`, parameters);
                break;
        }

        // console.log(response.ok);
        if (!response.ok) {
            return Promise.reject(
                new HttpError("Server Error", response.status, {
                    message: response.json(),
                }),
            );
        } else {
            const responseData = await response.json();

            if (resource === "auth") {
                // console.log(responseData)
                return {
                    data: {
                        id: id,
                        ...responseData,
                    },
                };
            } else {
                // console.log(responseData)
                return { data: responseData };
                //   {
                //      data: {responseData}
                //    };
            }
        }
    } catch (error) {
        console.error("Error in updateOne:", error);
        return Promise.reject(error);
    }
};

// const options = {
//   id: 3,
//   data: { title: "update3" },
//   previousData: { id: 3, title: "previous title" },
// };

// updateOne("http://209.38.228.54:8080/api", "why_us_band", options)()
//   .then((result) => {
//     console.log("Data:", result);
//     // console.log("Total:", result.total);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
