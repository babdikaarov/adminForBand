import { Create, ImageField, ImageInput, SimpleForm, TextInput } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";
export const CollaborationCreate = () => {

   return (
      <Create title="Coll Band → Коллаборация → создать" redirect="list">
          <SimpleForm toolbar={<CustomSaveToolBar />}>
         <ImageInput source="newImage" label="Аватар" multiple={false} accept="image/*">
               <ImageField source="src" title="Аватар" />
            </ImageInput>
            <TextInput source="name" />
         </SimpleForm>
      </Create>
   );
};
