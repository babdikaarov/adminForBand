import { Edit, SimpleForm, TextInput, SaveButton } from "react-admin";

export const HeroEdit = () => {
   return (
      <Edit title="Coll Band → Банер → изменить" redirect="list">
         <SimpleForm toolbar={<SaveButton />}>
            <TextInput disabled source="id" />
            <TextInput source="video" />
            <TextInput source="orientation" />
            {/* <ImageInput source="img" /> */}
         </SimpleForm>
      </Edit>
   );
};
