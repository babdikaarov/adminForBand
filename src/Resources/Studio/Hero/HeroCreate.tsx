import { Create, SimpleForm, TextInput } from "react-admin";
import CustomSelectInput from "../../../shared/CustomSelectInput";

export const HeroCreate = () => {
   return (
      <Create title="Cool Studio → Баннер → создать" redirect="list">
         <SimpleForm>
            <TextInput source="title" title="name" />
            <TextInput source="text" title="name" />
            <TextInput source="video" title="name" />
            <CustomSelectInput />
         </SimpleForm>
      </Create>
   );
};
