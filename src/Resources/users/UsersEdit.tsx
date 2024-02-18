import { Edit, SimpleForm, TextInput } from "react-admin";
import CustomSaveToolBar from "../../shared/CustomSaveToolBar";


export const UsersEdit = () => {

   return (
      <Edit title="Authorization → изменить" redirect="list">
         <SimpleForm toolbar={<CustomSaveToolBar />}>
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="email" />
            <TextInput source="password" />
         </SimpleForm>
      </Edit>
   );
};
