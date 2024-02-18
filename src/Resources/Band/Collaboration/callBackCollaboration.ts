import { ResourceCallbacks } from "react-admin";
import { encodeImageToBlurhash } from "../../../modules/bluerEncoder";
import createFormData from "../../../modules/createFormData";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const callBack = async (params: Partial<any>) => {
   let objectURL;
   params.orientation = "LANDSCAPE";

   if (params.newImage) {
      objectURL = URL.createObjectURL(params.newImage.rawFile);
      const bluerHash = await encodeImageToBlurhash(objectURL);
      params.bluer = bluerHash;
   }
   const formData = createFormData(params);
   objectURL && URL.revokeObjectURL(objectURL);

   return formData;
};

export const callBackCollaboration: ResourceCallbacks = {
   resource: "collaborations_band",
   beforeSave: callBack,
};
