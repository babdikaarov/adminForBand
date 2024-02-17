import { Create, ImageField, ImageInput, SimpleForm, /* TextInput */ } from "react-admin";

export const PartnersCreate = () => {
   return (
      <Create title="Coll Band → Клиенты → создать" redirect="list">
         <SimpleForm>
         <ImageInput source="newImage" label="Logo клиента" multiple={false} accept="image/*">
               <ImageField source="src" title="новое лого" />
            </ImageInput>
            {/* <TextInput source="url" title="name" /> */}
         </SimpleForm>
      </Create>
   );
};
