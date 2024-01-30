import { Edit, SimpleForm, TextInput, SaveButton } from "react-admin";
import CustomSelectInput from "../../../shared/CustomSelectInput";

export const CollaborationEdit = () => {
   return (
      <Edit title="Coll Band → Коллаборация → изменить" redirect="list">
         <SimpleForm toolbar={<SaveButton />}>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="image" />
            <CustomSelectInput />
         </SimpleForm>
      </Edit>
   );
};
