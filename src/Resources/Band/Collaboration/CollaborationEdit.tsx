import { Edit, SimpleForm, TextInput, SaveButton, ImageInput, ImageField } from "react-admin";
import CustomSelectInput from "../../../shared/CustomSelectInput";

export const CollaborationEdit = () => {
   return (
      <Edit title="Coll Band → Коллаборация → изменить" redirect="list">
         <SimpleForm toolbar={<SaveButton />}>
         <ImageInput source="newImage" label="Аватар" multiple={false} accept="image/*">
               <ImageField source="src" title="Аватар" />
            </ImageInput>
            <TextInput source="name" />
            <CustomSelectInput />
         </SimpleForm>
      </Edit>
   );
};
