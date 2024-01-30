import { Edit, SimpleForm, TextInput } from "react-admin";
// FIXME
// import CustomSaveButton from "./CustomSaveButton";
// import transfromCreate from "./transfromCreate";

export const AboutEdit = () => {
   return (
      <Edit title="Coll Band → О нас → изменить" redirect="list">
         <SimpleForm>
            <TextInput source="image" label="Image" />
            <TextInput source="orientation" label="Тип фотографии" />
         </SimpleForm>
      </Edit>
   );
};
