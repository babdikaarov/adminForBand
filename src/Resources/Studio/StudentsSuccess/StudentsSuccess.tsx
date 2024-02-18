import { List, Datagrid, EditButton, DeleteButton, UrlField } from "react-admin";
import { Create, Edit, SimpleForm, TextInput } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";

export const StudentsSuccessList = () => {


   return (
      <List title="Cool Studio → История успехов студентов" pagination={false} exporter={false} hasCreate={true}>
         <Datagrid bulkActionButtons={false}>
            <UrlField source="url" title="name" />
            <EditButton />
            <DeleteButton mutationMode="pessimistic"/>
         </Datagrid>
      </List>
   );
};

export const StudentsSuccessCreate = () => {
   return (
      <Create title="Cool Studio → История успехов студентов → создать" redirect="list">
          <SimpleForm toolbar={<CustomSaveToolBar />}>
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
         <SimpleForm toolbar={<CustomSaveToolBar />}>
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
