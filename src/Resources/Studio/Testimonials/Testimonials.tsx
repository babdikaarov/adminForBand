import { TestimonaialsList } from "./TestimonaialsList";
import { TestimonaialsCreate } from "./TestimonaialsCreate";
import { TestimonaialsEdit } from "./TestimonaialsEdit";

export default {
    resource: "st_student_reviews",
    list: TestimonaialsList,
    create: TestimonaialsCreate,
    edit: TestimonaialsEdit,
};
