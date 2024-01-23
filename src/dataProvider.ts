import { withLifecycleCallbacks } from "react-admin";
import customDataProvider from "./DataProvider/customDataProvider/customDataProvider";
import { teamLifecycleCallbacks } from "./DataProvider/LifeCycleCallbacks/teamCallBack";
import { aboutLifecycleCallbacks } from "./DataProvider/LifeCycleCallbacks/aboutCallBack";

const baseDataProvider = customDataProvider(import.meta.env.VITE_COOL_API);

export const dataProvider = withLifecycleCallbacks(baseDataProvider, [teamLifecycleCallbacks, aboutLifecycleCallbacks]);
