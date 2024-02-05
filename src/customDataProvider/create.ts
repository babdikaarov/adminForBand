import { CreateParams, CreateResult } from "react-admin";

export const create = async (url: string, resource: string, params: CreateParams): Promise<CreateResult> => {
   try {
      const { data } = params;
      // console.log(params);
      const token = JSON.parse(localStorage.user).token;
      const encoder = new TextEncoder();
      const jsonData = JSON.stringify(data);
      const contentLength = encoder.encode(jsonData).length;

      let headers = new Headers();
      let parameters;
      headers.set("Authorization", `Bearer ${token}`);
      headers.set("Content-Length", contentLength.toString());

      if (data instanceof FormData) {
         parameters = {
            method: "POST",
            headers,
            body: data as FormData,
         };
      } else {
         headers.set("Content-Type", "application/json");
         parameters = {
            method: "POST",
            headers,
            body: jsonData,
         };
         console.log(parameters);
      }

      const response = await fetch(`${url}/${resource}`, parameters);

      // console.log(response.ok);
      if (!response.ok) {
         throw new Error(`${response}`);
      }

      const responseData = await response.json();
      console.log(responseData);

      return {
         data: responseData,
      };
   } catch (error) {
      console.error("Error in create:", error);
      return Promise.reject(error);
   }
};

// const options = { data: { title: "foobar" } };

// create("http://209.38.228.54:8080/api", "why_us_band", options)
//    .then((result) => {
//       console.log("Data:", result);
//       // console.log("Total:", result.total);
//    })
//    .catch((error) => {
//       console.error("Error:", error);
//    });
