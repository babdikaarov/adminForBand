import { List, Datagrid, TextField, EditButton, DeleteButton, /* UrlField */ } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";

export const PartnersList = () => {

   /* 
     {
    "id": 0,
    "image": "string",
    "bluer": "string",
    "url": "string"
  }
   */
   return (
      <List title="Coll Band → Клиенты" hasCreate={true}>
         {/* <CreateButton /> */}
         <Datagrid>
            <TextField source="id" />
            <ModalImage source="image" />
            <TextField source="bluer" />
            {/* <UrlField source="url" /> */}
            <EditButton />
            <DeleteButton />
         </Datagrid>
      </List>
   );
};
