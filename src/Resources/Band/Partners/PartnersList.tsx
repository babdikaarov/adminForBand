import { List, Datagrid, TextField, EditButton, DeleteButton, ChipField } from "react-admin";

export const PartnersList = () => {
   return (
      <List title="Coll Band → Клиенты" hasCreate={true}>
         {/* <CreateButton /> */}
         <Datagrid>
            <TextField source="id" />
            <TextField source="image" title="name" />
            <TextField source="url" title="name" />
            <ChipField source="orientation" title="name" />
            <EditButton />
            <DeleteButton />
         </Datagrid>
      </List>
   );
};
