import { List, Datagrid, TextField, EditButton, UrlField, ChipField } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";
/*
 */
export const AboutList = () => {
   // ubrat  orientation s backend
   return (
      <List title="Cool Studio → О нас" hasCreate={false}>
         <Datagrid bulkActionButtons={false}>
            <ModalImage source="image" label="Постер" />
            <UrlField source="youtubeUrl" label="Youtube ссылка на видео" target="blank" />
            {/* bluer orientation убрать потом на продакшне */}
            <ChipField source="orientation" />
            <TextField source="bluer" />
            <EditButton />
         </Datagrid>
      </List>
   );
};
