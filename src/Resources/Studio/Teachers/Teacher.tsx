import { TeacherList } from "./TeacherList";
import { TeacherCreate } from "./TeacherCreate";
import { TeacherEdit } from "./TeacherEdit";

export default {
   resource: "st_teachers",
   list: TeacherList,
   create: TeacherCreate,
   edit: TeacherEdit,
};
