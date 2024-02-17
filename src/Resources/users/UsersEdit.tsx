import { Edit, SimpleForm, TextInput } from "react-admin";


export const UsersEdit = () => {
   /*
    <TextField source="id" />
            <TextField source="email" />
            <TextField source="fullName" />
            <TextField source="role" />
              "firstName": "string",
  "lastName": "string",
  "email": "string",
  "password": "string"
    */
   return (
      <Edit title="Authorization → изменить" redirect="list">
        <SimpleForm >
            <TextInput disabled source="id" />
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="email" />
            <TextInput source="password" />
         </SimpleForm>
      </Edit>
   );
};
