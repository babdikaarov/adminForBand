import { List, Datagrid, TextField, EditButton, DeleteButton, ChipField } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";

export const CollaborationList = () => {
   /* 
   {
   {
    "id": 0,
    "name": "string",
    "image": "string",
    "bluer": "string",
    "orientation": "PORTRAIT"
  }
}
   */
   return (
      <List title="Coll Band → Коллаборация " hasCreate={true}>
         {/* <CreateButton /> */}
         <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="bluer" />
            <ModalImage source="image" />
            <ChipField source="orientation" />
            <EditButton />
            <DeleteButton />
         </Datagrid>
      </List>
   );
};
