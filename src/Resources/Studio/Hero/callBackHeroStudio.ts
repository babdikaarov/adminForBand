import { ResourceCallbacks } from "react-admin";
import createFormData from "../../../modules/createFormData";
/*
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const callBack = async (params: Partial<any>) => {
    // console.log(params);
    if (!params.text) params.text = "-";
    if (!params.title) params.title = "-";
    const formData = createFormData(params);
    return formData;
};

export const callBackHeroStudio: ResourceCallbacks = {
    resource: "hero_studio",
    beforeSave: callBack,
};
