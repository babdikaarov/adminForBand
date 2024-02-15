import { Edit, SimpleForm, TextInput } from "react-admin";
import CustomSelectInput from "../../../shared/CustomSelectInput";

export const TeacherEdit = () => {
   /*
   {
  "name": "string",
  "image": "string",
  "urlInstagram": "string",
  "position": "string",
  "description": "string",
  "orientation": "PORTRAIT"
} 
    */
   return (
      <Edit title="Cool Studio → Преподаватели → изменить" redirect="list">
         <SimpleForm>
            <TextInput source="name"  />
            <TextInput source="image"  />
            <TextInput source="urlInstagram"  />
            <TextInput source="position"  />
            <TextInput source="description"  />
            <CustomSelectInput />
         </SimpleForm>
      </Edit>
   );
};
