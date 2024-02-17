import { Edit, ImageField, ImageInput, SimpleForm, /* TextInput */ } from "react-admin";

export const PartnersEdit = () => {
   return (
      <Edit title="Coll Band → Клиенты → изменить" redirect="list">
         <SimpleForm>
         <ImageInput source="newImage" label="Logo клиента" multiple={false} accept="image/*">
               <ImageField source="src" title="новое лого" />
            </ImageInput>
            {/* <TextInput source="url" title="name" /> */}
         </SimpleForm>
      </Edit>
   );
};
