import { Edit, ImageField, ImageInput, SimpleForm, TextInput } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";

export const TeacherEdit = () => {

   return (
      <Edit title="Cool Studio → Преподаватели → изменить" redirect="list" >
         <SimpleForm toolbar={<CustomSaveToolBar />}>
            <TextInput source="name"  />
            <ImageInput source="newImage" label="Постер" multiple={false} accept="image/*">
               <ImageField source="src" title="" />
            </ImageInput>
            <TextInput source="urlInstagram"  />
            <TextInput source="position"  />
            <TextInput source="description" fullWidth/>
         </SimpleForm>
      </Edit>
     
   );
};
