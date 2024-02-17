import { Create, ImageField, ImageInput, SimpleForm, TextInput } from "react-admin";
import CustomSelectInput from "../../../shared/CustomSelectInput";
export const CollaborationCreate = () => {
  /* 
  {
  "name": "string",
  "image": "string",
  "bluer": "string",
  "orientation": "PORTRAIT"
}
  */
   return (
      <Create title="Coll Band → Коллаборация → создать" redirect="list">
         <SimpleForm>
         <ImageInput source="newImage" label="Аватар" multiple={false} accept="image/*">
               <ImageField source="src" title="Аватар" />
            </ImageInput>
            <TextInput source="name" />
            <CustomSelectInput />
         </SimpleForm>
      </Create>
   );
};
