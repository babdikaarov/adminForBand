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

const baseDataProvider = customDataProvider(import.meta.env.VITE_COOL_API);

const callBacks = [aboutCallBackStudio, aboutCallBackBand,
     callBackTeam, callBackHero, callBackHeroStudio, 
     callBackPartners, callBackCourses, callBackTestimonials];

// export const dataProvider = customDataProvider(import.meta.env.VITE_COOL_API);
export const dataProvider = withLifecycleCallbacks(baseDataProvider, callBacks);
