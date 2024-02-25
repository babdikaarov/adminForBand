import { ResourceCallbacks } from "react-admin";
import createFormData from "../../../modules/createFormData";
/*
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
