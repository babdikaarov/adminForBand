import { List, Datagrid, TextField, ImageField, EditButton, DeleteButton, SaveButton } from "react-admin";
import { Create, Edit, SimpleForm, TextInput, ImageInput } from "react-admin";

export const CoursesList = () => {
  return (
    <List title="Studio Students Story" hasCreate={true}>
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

export const CoursesCreate = () => {
  // const postDefaultValue = () => ({ id: uuid(), created_at: new Date(), nb_views: 0 });
  return (
    <Create title="Studio Students Story - create">
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

export const CoursesEdit = () => {
  return (
    <Edit title="Studio Students Story - edit">
      <SimpleForm toolbar={<SaveButton />}>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <ImageInput source="img" />
      </SimpleForm>
    </Edit>
  );
};

export default {
  list: CoursesList,
  create: CoursesCreate,
  edit: CoursesEdit,
};
