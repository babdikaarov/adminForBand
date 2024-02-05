import { List, Datagrid, TextField, EditButton, DeleteButton, ChipField } from "react-admin";

export const CollaborationList = () => {
   /* 
   {
  "name": "string",
  "image": "string",
  "orientation": "PORTRAIT"
}
   */
   return (
      <List title="Coll Band → Коллаборация " hasCreate={true}>
         {/* <CreateButton /> */}
         <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="image" />
            <ChipField source="orientation" />
            {/* <ImageField source="image" title="image" /> */}
            <EditButton />
            <DeleteButton />
         </Datagrid>
      </List>
   );
};
