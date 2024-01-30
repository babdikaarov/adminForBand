import { Edit, SimpleForm, TextInput } from "react-admin";
import CustomSelectInput from "../../../shared/CustomSelectInput";

export const PartnersEdit = () => {
   return (
      <Edit title="Coll Band → Клиенты → изменить" redirect="list">
         <SimpleForm>
            <TextInput source="image" title="name" />
            <TextInput source="url" title="name" />
            <CustomSelectInput />
         </SimpleForm>
      </Edit>
   );
};
