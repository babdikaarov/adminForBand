/* STUDIO */
import aboutS from "./Studio/About/About";
import courses from "./Studio/Courses/Courses";
import heroS from "./Studio/Hero/Hero";
import studentsStory from "./Studio/StudentsSuccess/StudentsSuccess";
import teacher from "./Studio/Teachers/Teacher";
import testimonials from "./Studio/Testimonials";
/* BAND */
import aboutB from "./Band/About/About";
import collaboration from "./Band/Collaboration/Collaboration";
import contacts from "./Contacts/Contatcs";
import heroB from "./Band/Hero/Hero";
import partners from "./Band/Partners/Partners";
import team from "./Band/Team/Team";
import eventBand from "./Band/EvenBand/EventBand"
import eventBandImages from "./Band/EventBandImages/EventBandImages";

export const rcs = {
   Band: {
      aboutB,
      collaboration,
      heroB,
      partners,
      team,
      eventBand,
      eventBandImages
   },
   Studio: {
      aboutS,
      courses,
      heroS,
      studentsStory,
      teacher,
      testimonials,
   },
   Contacts: {
      contacts,
   },
};
