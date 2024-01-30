import { List, Datagrid, EditButton, DeleteButton, TextField } from "react-admin";

export const CoursesList = () => {
   return (
      <List title="Cool Studio → Направления" hasCreate={true}>
         <Datagrid>
            <TextField source="name" title="name" />
            <TextField source="image" title="name" />
            <TextField source="orientation" title="name" />
            <EditButton />
            <DeleteButton />
         </Datagrid>
      </List>
   );
};
