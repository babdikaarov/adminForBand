import { ResourceCallbacks } from "react-admin";
import { encodeImageToBlurhash } from "../../../modules/bluerEncoder";
import createFormData from "../../../modules/createFormData";
/*
 */
const callBack = async (params: Partial<any>) => {
   let objectURL;

   if (params.newImage) {
      objectURL = URL.createObjectURL(params.newImage.rawFile);
      const bluerHash = await encodeImageToBlurhash(objectURL);
      params.bluer = bluerHash;
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