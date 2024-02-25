import { ResourceCallbacks } from "react-admin";
import createFormData from "../../../modules/createFormData";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const callBack = async (params: Partial<any>) => {
    const newParams = {
        data: params.data.date,
        name: params.data.name,
        location: params.data.location,
    };
    const formData = createFormData(newParams);

    return {
        id: params.id,
        data: formData,
        previousData: params.previousData,
    };
};

export const callBackEventStudio: ResourceCallbacks = {
    resource: "event_studio",
    beforeUpdate: callBack,
};
