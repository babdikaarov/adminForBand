import { ImageField, ImageInput, TextInput } from "react-admin";
import { Edit, SimpleForm } from "react-admin";

export const CoursesEdit = () => {
   return (
      <Edit title="Cool Studio → Направления → изменить" redirect="list">
         <SimpleForm>
         <ImageInput source="newImage" label="icon направления" multiple={false} accept="image/*">
               <ImageField source="src" title="новое лого" />
            </ImageInput>
            <TextInput source="name" title="name" />
         </SimpleForm>
      </Edit>
   );
};
