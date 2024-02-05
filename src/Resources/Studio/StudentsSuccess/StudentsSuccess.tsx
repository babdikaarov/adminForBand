import { List, Datagrid, TextField, EditButton, DeleteButton, UrlField } from "react-admin";
import { Create, Edit, SimpleForm, TextInput } from "react-admin";

export const StudentsSuccessList = () => {
   /* 
     {
    "id": 0,
    "url": "string"
  }
   */
   return (
      <List title="Cool Studio → История успехов студентов" hasCreate={true}>
         {/* <CreateButton /> */}
         <Datagrid>
            <TextField source="id" />
            <UrlField source="url" title="name" />
            <EditButton />
            <DeleteButton />
         </Datagrid>
      </List>
   );
};

export const StudentsSuccessCreate = () => {
   return (
      <Create title="Cool Studio → История успехов студентов → создать" redirect="list">
         <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="url" label="url">
               <UrlField source="src" title="title" />
            </TextInput>
         </SimpleForm>
      </Create>
   );
};

export const StudentsSuccessEdit = () => {
   return (
      <Edit title="Cool Studio → История успехов студентов → изменить" redirect="list">
         <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="url" label="url">
               <UrlField source="src" title="title" />
            </TextInput>
         </SimpleForm>
      </Edit>
   );
};

export default {
   resource: "student_success_studio",
   list: StudentsSuccessList,
   create: StudentsSuccessCreate,
   edit: StudentsSuccessEdit,
};
