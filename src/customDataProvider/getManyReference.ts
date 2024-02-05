// import { GetManyReferenceParams, GetManyReferenceResult } from "react-admin";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getManyReference = async () => {
   // export const getManyReference = async (url: string, resource: string, params?: GetManyReferenceParams): Promise<GetManyReferenceResult> => {
   // console.log(url, resource, params);
   try {
      return {
         data: [],
      };
   } catch (error) {
      console.error("Error in getManyReference:", error);
      return Promise.reject(error);
   }
};

// const options = {
//   target: "post_id",
//   id: 123,
//   sort: { field: "created_at", order: "DESC" },
// } as GetManyReferenceParams;

// getManyReference("http://209.38.228.54:8080/api", "event_studio_images", options)()
//   .then((result) => {
//     console.log("Data:", result);
//     // console.log("Total:", result.total);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
