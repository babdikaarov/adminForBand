import { withLifecycleCallbacks } from "react-admin";
import customDataProvider from "./DataProvider/customDataProvider/customDataProvider";
import { teamLifecycleCallbacks } from "./DataProvider/LifeCycleCallbacks/teamCallBack";
import { aboutCallBackStudio } from "./DataProvider/LifeCycleCallbacks/aboutCallBack";
// import { contactsCallBack } from "./DataProvider/LifeCycleCallbacks/contactsCallBack";

const baseDataProvider = customDataProvider(import.meta.env.VITE_API_URL);

const callBacks = [teamLifecycleCallbacks, aboutCallBackStudio];

export const dataProvider = withLifecycleCallbacks(baseDataProvider, callBacks);
