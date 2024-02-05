import { ResourceCallbacks } from "react-admin";
import createFormData from "../../../modules/createFormData";
/*
 */
const callBack = async (params: Partial<any>) => {
   // console.log(params);
   params.orientation = "LANDSCAPE";
   const formData = createFormData(params);
   return formData;
};

export const callBackHero: ResourceCallbacks = {
   resource: "hero_band",
   beforeSave: callBack,
};
