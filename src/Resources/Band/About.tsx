import { List, Datagrid, TextField, ImageField, EditButton, DeleteButton, FileInput } from "react-admin";
import { Create, Edit, SimpleForm, TextInput } from "react-admin";

export const AboutList = () => {
   return (
      <List title="Coll Band → О нас" hasCreate={true}>
         {/* <CreateButton /> */}
         <Datagrid>
            <TextField source="id" />
            <TextField source="filename" label="File name" />
            <ImageField source="filename" label="image" />
            <EditButton />
            <DeleteButton />
         </Datagrid>
      </List>
   );
};

export const AboutCreate = () => {
   // const postDefaultValue = () => ({ id: uuid(), created_at: new Date(), nb_views: 0 });
   return (
      <Create title="Coll Band → О нас → создать">
         {/* <SimpleForm toolbar={<SaveButton />} defaultValues={postDefaultValue}> */}
         {/* <SimpleForm toolbar={<SaveButton />}> */}
         <SimpleForm>
            <TextInput source="id" disabled />
            <FileInput source="file" label="image">
               <ImageField source="src" title="title" />
            </FileInput>
         </SimpleForm>
      </Create>
   );
};

export const AboutEdit = () => {
   return (
      <Edit title="Coll Band → О нас → изменить">
         {/* <SimpleForm toolbar={<SaveButton />}> */}
         <SimpleForm>
            <TextInput source="id" disabled />
            <FileInput source="file" label="image">
               <ImageField source="src" title="title" />
            </FileInput>
         </SimpleForm>
      </Edit>
   );
};

export default {
   list: AboutList,
   create: AboutCreate,
   edit: AboutEdit,
};
