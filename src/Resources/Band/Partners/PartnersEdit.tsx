import { Edit, ImageField, ImageInput, SimpleForm, TextInput } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";

export const PartnersEdit = () => {
   return (
      <Edit title="Coll Band → Клиенты → изменить" redirect="list">
         <SimpleForm toolbar={<CustomSaveToolBar />}>
         <ImageInput source="newImage" label="Logo клиента" multiple={false} accept="image/*">
               <ImageField source="src" title="новое лого" />
            </ImageInput>
            <TextInput source="url" label="name" />
         </SimpleForm>
      </Edit>
   );
};
