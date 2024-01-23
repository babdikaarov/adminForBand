import { CreateParams, ResourceCallbacks } from "react-admin";
// import { extractIdentifierFromUrl } from "../../../modules/extracBrowserFileIndetifier";
export const createFormDataCallback = () => {
   return async (params: CreateParams) => {
      const { data } = params;
      const formDataImage = new FormData();
      formDataImage.append("file", data.filename.rawFile);
      console.log(formDataImage);
      return { data: formDataImage };
   };
   // return {
   //    resource: resource,
   //    beforeCreate: async (params) => {
   //       const { data } = params;
   //       //   console.log(data);

   //       const formDataImage = new FormData();
   //       formDataImage.append("file", data.filename.rawFile);
   //       console.log(formDataImage);

   //       return { data: formDataImage };
   //    },
   // };
};

export const aboutLifecycleCallbacks: ResourceCallbacks = {
   resource: "about_us",
   beforeCreate: createFormDataCallback(),
};

export const anotherResourceLifecycleCallbacks: ResourceCallbacks = {
   resource: "about_us_band",
   beforeCreate: createFormDataCallback(),
};
