import { List, Datagrid, TextField, EditButton, DeleteButton, ChipField } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";
import { ClickVideo } from "../../../shared/ClickVideo";

export const TeamList = () => {
  
   return (
      <List title="Coll Band → Наша команда" pagination={false} exporter={false} hasCreate={true}>
         <Datagrid bulkActionButtons={false}>
            <TextField source="name" label="Имя" />
            <ModalImage source="image" label="photo" />

            <ClickVideo source="video" label="Видео"/>
            <TextField source="instrument" label="Роль" />
            <ChipField source="orientation" />
            <EditButton />
            <DeleteButton mutationMode="pessimistic"/>
         </Datagrid>
      </List>
   );
};
