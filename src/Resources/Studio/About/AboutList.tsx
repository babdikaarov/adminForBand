import { List, Datagrid, TextField, ImageField, EditButton, DeleteButton, SelectField } from "react-admin";
import { ModalImage } from "./ModalImage";

export const AboutList = () => {
   return (
      <List title="Cool Studio → О нас" hasCreate={true}>
         <Datagrid>
            <TextField source="id" />
            <SelectField
               source="orientation"
               label="Тип фотографии"
               choices={[
                  { id: "LANDSCAPE", name: "Альбом" },
                  { id: "PORTRAIT", name: "Портрет" },
               ]}
            />

            <ModalImage source="image" />
            <ImageField source="video" label="video" />
            <EditButton />
            <DeleteButton />
         </Datagrid>
      </List>
   );
};
