import { ResourceCallbacks } from "react-admin";
import { encodeImageToBlurhash } from "../../../modules/bluerEncoder";
import createFormData from "../../../modules/createFormData";
/*
 */
const callBack = async (params: Partial<any>) => {
   let objectURL;

   if (params.newImage.rawFile) {
      objectURL = URL.createObjectURL(params.newImage.rawFile);
      const bluerHash = await encodeImageToBlurhash(objectURL);
      params.bluer = bluerHash;
   }
   const formData = createFormData(params);
   objectURL && URL.revokeObjectURL(objectURL);

   return formData;
};

export const aboutCallBackBand: ResourceCallbacks = {
   resource: "about_us_band",
   beforeSave: callBack,
};
