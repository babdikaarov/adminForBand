import { Create, SimpleForm, TextInput } from "react-admin";
import CustomSelectInput from "../../../shared/CustomSelectInput";

export const PartnersCreate = () => {
   return (
      <Create title="Coll Band → Клиенты → создать" redirect="list">
         <SimpleForm>
            <TextInput source="image" title="name" />
            <TextInput source="url" title="name" />
            <CustomSelectInput />
         </SimpleForm>
      </Create>
   );
};
