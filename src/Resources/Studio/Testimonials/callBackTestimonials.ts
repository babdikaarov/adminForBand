import { ResourceCallbacks } from "react-admin";
import { encodeImageToBlurhash } from "../../../modules/bluerEncoder";
import createFormData from "../../../modules/createFormData";
/*
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const callBack = async (params: Partial<any>) => {
    let objectURL;
    params.orientation = "PORTRAIT";

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

export const callBackTestimonials: ResourceCallbacks = {
    resource: "st_student_reviews",
    beforeSave: callBack,
};
