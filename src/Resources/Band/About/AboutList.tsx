import { List, Datagrid, TextField, EditButton, ChipField } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";

export const AboutList = () => {
   return (
      <List title="Coll Band → О нас" hasCreate={false}>
         <Datagrid bulkActionButtons={false}>
            <ModalImage source="image" label="Постер" />
            {/* bluer orientation убрать потом на продакшне */}
            <ChipField source="orientation" />
            <TextField source="bluer" />
            <EditButton />
         </Datagrid>
      </List>
   );
};
