import { withLifecycleCallbacks } from "react-admin";
import customDataProvider from "./customDataProvider/customDataProvider";
import { aboutCallBackStudio } from "./Resources/Studio/About/callBackStudioAbout";
import { aboutCallBackBand } from "./Resources/Band/About/callBackBandAbout";
import { callBackTeam } from "./Resources/Band/Team/callBackTeam";
import { callBackHero } from "./Resources/Band/Hero/callBackHero";
import { callBackHeroStudio } from "./Resources/Studio/Hero/callBackHeroStudio";
import { callBackPartners } from "./Resources/Band/Partners/callBackPartners";
import { callBackCourses } from "./Resources/Studio/Courses/callBackCourses";
import { callBackTestimonials } from "./Resources/Studio/Testimonials/callBackTestimonials";
import { callBackCollaboration } from "./Resources/Band/Collaboration/callBackCollaboration";
import { callBackTeacher } from "./Resources/Studio/Teachers/callBackTeacher";
import { callBackImageBand } from "./Resources/Band/Gallery/image/callBackImageBand";
import { callBackEventBand } from "./Resources/Band/Gallery/callBackEventBand";
import { callBackImageStudio } from "./Resources/Studio/Gallery/image/callBackImageStudio";
import { callBackEventStudio } from "./Resources/Studio/Gallery/callBackEventStudio";
import { callBackUser } from "./Resources/users/callBackUser";

const baseDataProvider = customDataProvider(import.meta.env.VITE_COOL_API);

const callBacks = [
    aboutCallBackStudio,
    aboutCallBackBand,
    callBackTeam,
    callBackHero,
    callBackHeroStudio,
    callBackPartners,
    callBackCourses,
    callBackTestimonials,
    callBackCollaboration,
    callBackTeacher,
    callBackImageBand,
    callBackEventBand,
    callBackImageStudio,
    callBackEventStudio,
    callBackUser,
];

// export const dataProvider = customDataProvider(import.meta.env.VITE_COOL_API);
export const dataProvider = withLifecycleCallbacks(baseDataProvider, callBacks);
