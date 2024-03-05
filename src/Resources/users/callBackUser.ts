import { ResourceCallbacks } from "react-admin";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const callBack = async (params: Partial<any>) => {
    // console.log(params.lastName);
    const data = {
        id: params.id,
        firstName: params.firstName,
        lastName: params.lastName,
        email: params.email,
        password: params.password,
    };
    return data;
};


export const callBackUser: ResourceCallbacks = {
    resource: "auth",
    beforeSave: callBack,
};
