import { List, Datagrid, EditButton } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";

export const AboutList = () => {
   return (
      <List title="Coll Band → О нас" pagination={false} exporter={false} hasCreate={false}>
         <Datagrid bulkActionButtons={false} >
            <ModalImage source="image" label="Постер" />
           
            <EditButton />
         </Datagrid>
      </List>
   );
};
