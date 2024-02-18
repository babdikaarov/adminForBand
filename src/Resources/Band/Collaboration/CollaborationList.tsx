import { List, Datagrid, TextField, EditButton, DeleteButton } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";

export const CollaborationList = () => {

   return (
      <List title="Coll Band → Коллаборация" pagination={false} exporter={false} hasCreate={true}>
         <Datagrid bulkActionButtons={false}>
            <TextField source="name" />
            <ModalImage source="image" />
            <EditButton />
            <DeleteButton mutationMode="pessimistic"/>
         </Datagrid>
      </List>
   );
};
