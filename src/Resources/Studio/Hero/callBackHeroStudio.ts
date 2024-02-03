import { ResourceCallbacks } from "react-admin";
import createFormData from "../../../modules/createFormData";
/*
 */
const callBack = async (params: Partial<any>) => {
   // console.log(params);
   const formData = createFormData(params);
   return formData;
};

export const callBackHeroStudio: ResourceCallbacks = {
   resource: "hero_studio",
   beforeSave: callBack,
};
