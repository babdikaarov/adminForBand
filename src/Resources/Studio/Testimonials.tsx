import { List, Datagrid, TextField, EditButton, DeleteButton, SaveButton } from "react-admin";
import { Create, Edit, SimpleForm, TextInput } from "react-admin";
import CustomSelectInput from "../../shared/CustomSelectInput";

export const TestimonaialsList = () => {
   /* 
     {
    "id": 0,
    "image": "string",
    "name": "string",
    "reviews": "string",
    "orientation": "PORTRAIT"
  }
   */
   return (
      <List title="Cool Studio → Отзывы учеников" hasCreate={true}>
         {/* <CreateButton /> */}
         <Datagrid>
            <TextField source="id" />
            <TextField source="image" title="name" />
            <TextField source="name" title="name" />
            <TextField source="reviews" title="name" />
            <TextField source="orientation" title="name" />
            <EditButton />
            <DeleteButton />
         </Datagrid>
      </List>
   );
};

export const TestimonaialsCreate = () => {
   return (
      <Create title="Cool Studio → Отзывы учеников → создать" redirect="list">
         <SimpleForm toolbar={<SaveButton />}>
            <TextInput source="image" title="name" />
            <TextInput source="name" title="name" />
            <TextInput source="reviews" title="name" />
            <CustomSelectInput />
         </SimpleForm>
      </Create>
   );
};

export const TestimonaialsEdit = () => {
   return (
      <Edit title="Cool Studio → Отзывы учеников → изменить" redirect="list">
         <SimpleForm toolbar={<SaveButton />}>
            <TextInput source="image" title="name" />
            <TextInput source="name" title="name" />
            <TextInput source="reviews" title="name" />
            <CustomSelectInput />
         </SimpleForm>
      </Edit>
   );
};

export default {
   resource: "st_student_reviews",
   list: TestimonaialsList,
   create: TestimonaialsCreate,
   edit: TestimonaialsEdit,
};
