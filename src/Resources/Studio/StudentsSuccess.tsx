import { List, Datagrid, TextField, ImageField, EditButton, DeleteButton, SaveButton } from "react-admin";
import { Create, Edit, SimpleForm, TextInput, ImageInput } from "react-admin";

export const StudentsSuccessList = () => {
   return (
      <List title="Cool Studio → История успехов студентов" hasCreate={true}>
         {/* <CreateButton /> */}
         <Datagrid>
            <TextField source="id" />
            <TextField source="filename" title="name" />
            <ImageField source="filename" title="image" />
            <EditButton />
            <DeleteButton />
         </Datagrid>
      </List>
   );
};

export const StudentsSuccessCreate = () => {
   // const postDefaultValue = () => ({ id: uuid(), created_at: new Date(), nb_views: 0 });
   return (
      <Create title="Cool Studio → История успехов студентов → создать">
         {/* <SimpleForm toolbar={<SaveButton />} defaultValues={postDefaultValue}> */}
         <SimpleForm toolbar={<SaveButton />}>
            <TextInput source="id" disabled />
            <ImageInput source="filename" label="image">
               <ImageField source="src" title="title" />
            </ImageInput>
         </SimpleForm>
      </Create>
   );
};

export const StudentsSuccessEdit = () => {
   return (
      <Edit title="Cool Studio → История успехов студентов → изменить">
         <SimpleForm toolbar={<SaveButton />}>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <ImageInput source="img" />
         </SimpleForm>
      </Edit>
   );
};

export default {
   list: StudentsSuccessList,
   create: StudentsSuccessCreate,
   edit: StudentsSuccessEdit,
};
