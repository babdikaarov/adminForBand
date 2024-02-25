/* STUDIO */
import aboutS from "./Studio/About/About";
import courses from "./Studio/Courses/Courses";
import heroS from "./Studio/Hero/Hero";
import studentsStory from "./Studio/StudentsSuccess/StudentsSuccess";
import teacher from "./Studio/Teachers/Teacher";
import testimonials from "./Studio/Testimonials/Testimonials";
/* BAND */
import aboutB from "./Band/About/About";
import collaboration from "./Band/Collaboration/Collaboration";
import contacts from "./Contacts/Contatcs";
import heroB from "./Band/Hero/Hero";
import partners from "./Band/Partners/Partners";
import team from "./Band/Team/Team";
import gallery from "./Band/Gallery/EventBand";
import studioGallery from "./Studio/Gallery/EventStudio";

export const rcs = {
    Band: {
        aboutB,
        collaboration,
        heroB,
        partners,
        team,
        gallery,
    },
    Studio: {
        aboutS,
        courses,
        heroS,
        studentsStory,
        teacher,
        testimonials,
        studioGallery,
    },
    Contacts: {
        contacts,
    },
};
