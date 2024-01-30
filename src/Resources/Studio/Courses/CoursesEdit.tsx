import { TextInput } from "react-admin";
import { Edit, SimpleForm } from "react-admin";
import CustomSelectInput from "../../../shared/CustomSelectInput";

export const CoursesEdit = () => {
   return (
      <Edit title="Cool Studio → Направления → изменить" redirect="list">
         <SimpleForm>
            <TextInput source="name" title="name" />
            <TextInput source="image" title="name" />
            <CustomSelectInput />
         </SimpleForm>
      </Edit>
   );
};
