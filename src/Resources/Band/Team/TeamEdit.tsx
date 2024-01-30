import { Edit, SimpleForm, TextInput } from "react-admin";
import CustomSelectInput from "../../../shared/CustomSelectInput";

export const TeamEdit = () => {
   return (
      <Edit title="Coll Band → Наша команда → изменить карточку" redirect="list">
         <SimpleForm>
            <TextInput source="name" label="Имя" />
            <TextInput source="instrument" label="Роль" />
            <TextInput source="image" label="photo" />
            <TextInput source="video" label="video" />
            <CustomSelectInput />
         </SimpleForm>
      </Edit>
   );
};
