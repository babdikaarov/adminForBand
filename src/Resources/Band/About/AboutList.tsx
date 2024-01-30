import { List, Datagrid, TextField, EditButton, SelectField, UrlField, DeleteButton, ChipField } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";

export const AboutList = () => {
   return (
      <List title="Coll Band → О нас" hasCreate={true}>
         <Datagrid>
            {/* <TextField source="id" /> */}
            {/* <UrlField source="video" label="Youtube ссылка на видео" /> */}
            <TextField source="id" />
            <TextField source="image" label="Постер" />
            <ChipField source="orientation" />

            {/* <UrlField source="video" label="video" /> */}
            <EditButton />
            <DeleteButton />
         </Datagrid>
      </List>
   );
};
