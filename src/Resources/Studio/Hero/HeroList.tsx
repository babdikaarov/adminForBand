import { List, Datagrid, TextField, EditButton, DeleteButton, ChipField } from "react-admin";

export const HeroList = () => {
   return (
      <List title="Cool Studio → Баннер" hasCreate={true}>
         <Datagrid>
            <TextField source="id" />
            <TextField source="title" title="name" />
            <TextField source="text" title="name" />
            <TextField source="video" title="name" />
            <ChipField source="orientation" title="name" />
            <EditButton />
            <DeleteButton />
         </Datagrid>
      </List>
   );
};
