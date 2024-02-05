import { Edit, SimpleForm, TextInput } from "react-admin";
import CustomSelectInput from "../../../shared/CustomSelectInput";

export const TeacherEdit = () => {
   return (
      <Edit title="Cool Studio → Преподаватели → изменить" redirect="list">
         <SimpleForm>
            <TextInput source="name" title="name" />
            <TextInput source="image" title="name" />
            <TextInput source="urlInstagram" title="name" />
            <TextInput source="position" title="name" />
            <TextInput source="description" title="name" />
            <CustomSelectInput />
         </SimpleForm>
      </Edit>
   );
};
