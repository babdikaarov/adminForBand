import { Edit, SimpleForm, TextInput } from "react-admin";
import CustomSelectInput from "../../../shared/CustomSelectInput";

export const HeroEdit = () => {
   return (
      <Edit title="Cool Studio → Баннер → изменить" redirect="list">
         <SimpleForm>
            <TextInput source="title" title="name" />
            <TextInput source="text" title="name" />
            <TextInput source="video" title="name" />
            <CustomSelectInput />
         </SimpleForm>
      </Edit>
   );
};
