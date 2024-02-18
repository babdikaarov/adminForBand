import { ImageField, ImageInput, TextInput } from "react-admin";
import { Edit, SimpleForm } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";

export const CoursesEdit = () => {
   return (
      <Edit title="Cool Studio → Направления → изменить" redirect="list">
         <SimpleForm toolbar={<CustomSaveToolBar />}>
         <ImageInput source="newImage" label="icon направления" multiple={false} accept="image/*">
               <ImageField source="src" title="новое лого" />
            </ImageInput>
            <TextInput source="name" title="name" />
         </SimpleForm>
      </Edit>
   );
};
