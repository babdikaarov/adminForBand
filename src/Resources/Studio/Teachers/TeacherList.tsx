import { List, Datagrid, TextField, EditButton, DeleteButton, ChipField } from "react-admin";

export const TeacherList = () => {
   return (
      <List title="Cool Studio → Преподаватели" hasCreate={true}>
         <Datagrid>
            <TextField source="id" />
            <TextField source="name" title="name" />
            <TextField source="image" title="name" />
            <TextField source="urlInstagram" title="name" />
            <TextField source="position" title="name" />
            <TextField source="description" title="name" />
            <ChipField source="orientation" title="name" />
            <EditButton />
            <DeleteButton />
         </Datagrid>
      </List>
   );
};
