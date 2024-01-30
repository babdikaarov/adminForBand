import { UpdateParams, UpdateResult } from "react-admin";
import hasFormDataValue from "../../modules/hasFormData";

export const updateOne = async (url: string, resource: string, params: UpdateParams): Promise<UpdateResult> => {
   const { id, data } = params;
   console.log(params);
   // console.log(data);

   try {
      // const token = JSON.parse(localStorage.user).token;
      // // console.log(token);
      // const jsonData = JSON.stringify({ ...data });
      // // const jsonData = JSON.stringify({ id ...data });
      // //   console.log({ jsonData });
      // const encoder = new TextEncoder();
      // const contentLength = encoder.encode(jsonData).length;

      // const headers = {
      //    Authorization: `Bearer ${token}`,
      //    "Content-Type": "application/json",
      //    "Content-Length": contentLength.toString(),
      // };

      // const parameters = {
      //    method: "PUT",
      //    headers,
      //    body: jsonData,
      // };
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
            method: "PUT",
            headers,
            body: data as FormData,
         };
         // console.log(data);
         // console.log(parameters.body);
      } else {
         // if hasMedia does not exist skipped during lifeCycleCallBack
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
            parameters.method = "PATCH";
            response = await fetch(`${url}/${resource}`, parameters);
            break;
         default:
            response = await fetch(`${url}/${resource}/${id}`, parameters);
            break;
      }

      const responseData = await response.json();
      // console.log(responseData);
      // FIX_ME delete below function when beckend fixed it
      // function extractNumberFromString(str: string) {
      //    const regex = /\d+/; // Match one or more digits
      //    const match = str.match(regex);

      //    if (match) {
      //       // Convert the matched string to a number
      //       return parseInt(match[0], 10);
      //    }

      //    // Return null if no numbers are found in the string
      //    return null;
      // }
      // const idRes = extractNumberFromString(responseData.message);
      // // console.log(id);
      return {
         data: responseData,
      };
      // return {
      // 	data: responseData,
      // };
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
