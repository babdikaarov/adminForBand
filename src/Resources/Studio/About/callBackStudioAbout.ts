import { ResourceCallbacks } from "react-admin";
import { encodeImageToBlurhash } from "../../../modules/bluerEncoder";
import createFormData from "../../../modules/createFormData";
/*
 */
const callBack = async (params: Partial<any>) => {
   let objectURL;
   if (params.image instanceof File) {
      objectURL = URL.createObjectURL(params.image);
      const bluerHash = await encodeImageToBlurhash(objectURL);
      params.bluer = bluerHash;
   } else {
      params.image = null;
      params.bluer = null;
   }
   console.log(params);

   const formData = createFormData(params);
   objectURL && URL.revokeObjectURL(objectURL);
   return formData;
};

export const aboutCallBackStudio: ResourceCallbacks = {
   resource: "about_us_studio",
   beforeSave: callBack,
};
