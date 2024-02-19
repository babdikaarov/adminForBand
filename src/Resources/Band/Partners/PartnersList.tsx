import { List, Datagrid, EditButton, DeleteButton, TextField, /* UrlField */ } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";

export const PartnersList = () => {


   return (
      <List title="Coll Band → Клиенты" pagination={false} exporter={false} hasCreate={true}>
         <Datagrid bulkActionButtons={false}>
            <ModalImage source="image" />
            <TextField source="url" label="name" />
            <EditButton />
            <DeleteButton mutationMode="pessimistic"/>
         </Datagrid>
      </List>
   );
};
