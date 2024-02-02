import { ResourceCallbacks, UpdateParams } from "react-admin";
import createFormData from "../../../modules/createFormData";
import processRawFile from "../../../modules/processRawFile";
/*
 */
const callBack = async (params: UpdateParams<any>) => {
   console.log(params);
   const { data } = params;

   processRawFile(data, "video");
   data.orientation = "LANDSCAPE";

   // console.log(params);
   const formData = createFormData(data);
   return { ...params, data: formData };
};

export const callBackHero: ResourceCallbacks = {
   resource: "hero_band",
   beforeUpdate: callBack,
};
