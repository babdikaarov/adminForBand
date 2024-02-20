import { CoursesList } from "./CoursesList";
import { CoursesCreate } from "./CoursesCreate";
import { CoursesEdit } from "./CoursesEdit";

export default {
    resource: "direction",
    list: CoursesList,
    create: CoursesCreate,
    edit: CoursesEdit,
};
