import { HttpError, UpdateParams, UpdateResult } from "react-admin";

export const updateOne = async (url: string, resource: string, params: UpdateParams): Promise<UpdateResult> => {
   const { id, data } = params;
   console.log(params);
   // console.log(data);

   try {
      const token = JSON.parse(localStorage.user).token;
      const encoder = new TextEncoder();
      const jsonData = JSON.stringify(data);
      const contentLength = encoder.encode(jsonData).length;

      let headers = new Headers();
      headers.set("Authorization", `Bearer ${token}`);
      headers.set("Content-Length", contentLength.toString());

      let parameters;
      // console.log(data);

      if (data instanceof FormData) {
         // if formaData exist assigned during lifeCycleCallBack

         parameters = {
            method: "PUT",
            headers,
            body: data as FormData,
         };
         // console.log(data);
         // console.log(parameters.body);
      } else {
         // if no media exist skip during lifeCycleCallBack
         headers.set("Content-Type", "application/json");
         parameters = {
            method: "PUT",
            headers,
            body: jsonData,
         };
         // console.log(parameters);
      }

      let response;

      switch (resource) {
         case "contacts":
         case "about_us_studio":
         case "about_us_band":
         case "hero_band":
         case "hero_studio":
            parameters.method = "PATCH";
            console.log(parameters);

            response = await fetch(`${url}/${resource}`, parameters);
            break;
         case "team_band":
            parameters.method = "PATCH";
            console.log(parameters);
            response = await fetch(`${url}/${resource}/${id}`, parameters);
            break;
         default:
            console.log(parameters);

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
         console.log(responseData);

         return {
            data: responseData,
         };
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
