import { List, Datagrid, TextField, EditButton, UrlField, DeleteButton, ChipField } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";

export const AboutList = () => {
   return (
      <List title="Cool Studio → О нас" hasCreate={true}>
         <Datagrid>
            <TextField source="id" />
            {/* <UrlField source="video" label="Youtube ссылка на видео" /> */}
            <ModalImage source="image" label="Постер" />
            <ChipField source="orientation" />

            <UrlField source="video" label="video" />
            <EditButton />
            <DeleteButton />
         </Datagrid>
      </List>
   );
};
