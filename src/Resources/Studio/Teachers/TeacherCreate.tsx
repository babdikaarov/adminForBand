import { Create, ImageField, ImageInput, SimpleForm, TextInput } from "react-admin";
import CustomSelectInput from "../../../shared/CustomSelectInput";

export const TeacherCreate = () => {
   return (
      <Create title="Cool Studio → Преподаватели → создать" redirect="list">
         <SimpleForm>
            <TextInput source="name" title="name" />
            <ImageInput source="newImage" label="Постер" multiple={false} accept="image/*">
               <ImageField source="src" title="" />
            </ImageInput>
            <TextInput source="urlInstagram" title="name" />
            <TextInput source="position" title="name" />
            <TextInput source="description" title="name" />
            <CustomSelectInput />
         </SimpleForm>
      </Create>
   );
};
