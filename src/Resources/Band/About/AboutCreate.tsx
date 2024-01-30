import { Create, SimpleForm, TextInput } from "react-admin";

// FIXME
// import CustomSaveButton from "./CustomSaveButton";
// import transfromCreate from "./transfromCreate";

export const AboutCreate = () => {
   return (
      <Create title="Coll Band → О нас" redirect="list">
         <SimpleForm>
            <TextInput source="image" label="Image" />
            <TextInput source="orientation" label="Тип фотографии" />
         </SimpleForm>
      </Create>
   );
};
