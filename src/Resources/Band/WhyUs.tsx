import {
   List,
   Datagrid,
   TextField,
   //  ImageField,
   EditButton,
   //  DeleteButton,
   SaveButton,
   useNotify,
   useRedirect,
   //  FileInput,
   //  FileField,
} from "react-admin";
import { Create, Edit, SimpleForm, TextInput /* , ImageInput  */ } from "react-admin";

export const WhyUsList = () => {
   return (
      <List title="Studio Students Story" hasCreate={false}>
         <Datagrid bulkActionButtons={false}>
            {/* <TextField source="id" /> */}
            <TextField source="title" title="name" />
            {/* <ImageField source="title" title="image" /> */}
            <EditButton />
            {/* udalit knopku delet FIX_ME */}
            {/* <DeleteButton /> */}
         </Datagrid>
      </List>
   );
};

export const WhyUsCreate = () => {
   const notify = useNotify();
   const redirect = useRedirect();

   const onSuccess = () => {
      notify(`Changes saved`);
      redirect(`/why_us_band`);
   };
   return (
      <Create title="Studio Students Story - create" mutationOptions={{ onSuccess }}>
         {/* <SimpleForm toolbar={<SaveButton />} defaultValues={postDefaultValue}> */}
         <SimpleForm toolbar={<SaveButton />}>
            <TextInput source="id" disabled />
            <TextInput source="title" />
            {/* <FileInput source="title">
               <FileField source="src" title="title" />
            </FileInput> */}
            {/* <ImageInput source="title" label="image">
               <ImageField source="src" title="title" />
            </ImageInput> */}
         </SimpleForm>
      </Create>
   );
};

export const WhyUsEdit = () => {
   return (
      <Edit title="Studio Students Story - edit">
         <SimpleForm toolbar={<SaveButton />}>
            {/* <TextInput disabled source="id" /> */}
            <TextInput source="title" />
            {/* <ImageInput source="title" label="image">
               <ImageField source="src" title="title" />
            </ImageInput> */}
         </SimpleForm>
      </Edit>
   );
};

export default {
   list: WhyUsList,
   create: WhyUsCreate,
   edit: WhyUsEdit,
};
