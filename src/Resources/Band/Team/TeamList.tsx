import { List, Datagrid, TextField, EditButton, DeleteButton, ChipField } from "react-admin";

export const TeamList = () => {
   return (
      <List title="Coll Band → Наша команда" hasCreate={true}>
         <Datagrid>
            <TextField source="id" />
            <TextField source="name" label="Имя" />
            <TextField source="instrument" label="Роль" />
            <TextField source="image" label="photo" />
            <TextField source="video" label="video" />
            <ChipField source="orientation" />
            <EditButton />
            <DeleteButton />
         </Datagrid>
      </List>
   );
};
