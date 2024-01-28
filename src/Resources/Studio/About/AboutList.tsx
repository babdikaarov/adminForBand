import { List, Datagrid, TextField, ImageField, EditButton, SelectField } from "react-admin";
import { ModalImage } from "./ModalImage";

export const AboutList = () => {
   return (
      <List title="Cool Studio → О нас" hasCreate={true}>
         <Datagrid>
            <TextField source="id" />
            {/* <UrlField source="video" label="Youtube ссылка на видео" /> */}
            <ModalImage source="image" label="Постер" />
            <SelectField
               source="orientation"
               label="Тип фотографии"
               choices={[
                  { id: "LANDSCAPE", name: "Альбом" },
                  { id: "PORTRAIT", name: "Портрет" },
               ]}
            />
            <ImageField source="video" label="video" />
            <EditButton />
         </Datagrid>
      </List>
   );
};
