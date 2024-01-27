import { CreateParams, ResourceCallbacks } from "react-admin";
export const createFormDataCallback = () => {
   return async (params: CreateParams) => {
      const { data } = params;
      const formDataImage = new FormData();
      formDataImage.append("orientation", data.orientation);
      formDataImage.append("image", data.image.rawFile);
      // FIXME video should be a string
      formDataImage.append("video", data.video.rawFile);
      console.log(formDataImage);
      return { data: formDataImage };
   };
};

export const aboutCallBackStudio: ResourceCallbacks = {
   resource: "about_us_studio",
   beforeCreate: createFormDataCallback(),
};

// export const anotherResourceLifecycleCallbacks: ResourceCallbacks = {
//    resource: "about_us_band",
//    beforeCreate: createFormDataCallback(),
// };
