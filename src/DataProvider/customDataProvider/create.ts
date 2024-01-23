import { CreateParams, CreateResult } from "react-admin";
import hasFormDataValue from "../../modules/hasFormData";

export const create = async (url: string, resource: string, params: CreateParams): Promise<CreateResult> => {
   const { data } = params;
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

      if (hasFormDataValue(params)) {
         // if hasMedia exist assigned during lifeCycleCallBack

         parameters = {
            method: "POST",
            headers,
            body: data as FormData,
         };
         // console.log(parameters);
      } else {
         // if hasMedia does not exist skipped during lifeCycleCallBack
         headers.set("Content-Type", "application/json");
         parameters = {
            method: "POST",
            headers,
            body: jsonData,
         };
         console.log(parameters);
      }

      const response = await fetch(`${url}/${resource}`, parameters);

      // console.log(response);

      const responseData = await response.json();
      console.log(responseData);

      // FIX_ME delete below function when beckend response will include posted body fixed it
      function extractNumberFromString(str: string) {
         const regex = /\d+/; // Match one or more digits
         const match = str.match(regex);

         if (match) {
            // Convert the matched string to a number
            return parseInt(match[0], 10);
         }

         // Return null if no numbers are found in the string
         return null;
      }
      const id = extractNumberFromString(responseData.message);
      // console.log(id);
      return {
         data: { id: id, ...data },
      };
      // FIXME delete above after fix
      // return {
      //    data: responseData,
      // };
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
