import { fetchUtils, GetOneParams, GetOneResult } from "react-admin";

export const getOne = async (url: string, resource: string, params: GetOneParams): Promise<GetOneResult> => {
   const id = params?.id;
   // console.log(resource);

   try {
      let response;
      switch (resource) {
         /*     case "about_us_studio":
            response = await fetch(`${url}/${resource}/image/${id}`);
            console.log(response);
            break; */
         case "contacts":
            response = await fetch(`${url}/${resource}`);
            break;
         default:
            response = await fetch(`${url}/${resource}/${id}`);
            break;
      }

      const data = await response.json();
      // console.log(data);

      // //   console.log(id);
      // const response = await fetch(`${url}/${resource}/${id}`);
      // if (!response.ok) {
      //    throw Error;
      // }
      // const json = response.json();
      return {
         data,
      };
   } catch (error) {
      console.error("Error in getOne:", error);
      return Promise.reject(error);
   }
};

// getOne("http://209.38.228.54:8080/api", "event_studio_images", { id: 1 })()
//   .then((result) => {
//     console.log("Data:", result);
//     // console.log("Total:", result.total);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
