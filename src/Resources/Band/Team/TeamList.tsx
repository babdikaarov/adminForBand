import { List, Datagrid, TextField, EditButton, DeleteButton, ChipField, UrlField, FileField } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";

export const TeamList = () => {
   /* 
   {
name	string
image	string($binary)
video	string($binary)
bluer	string
instrument	string
orientation	string
Enum:
Array [ 2 ]
}
   */
   return (
      <List title="Coll Band → Наша команда" hasCreate={true}>
         <Datagrid>
            <TextField source="id" />
            <TextField source="name" label="Имя" />
            <ModalImage source="image" label="photo" />
            {/* fixme after saveedit source for vide from context is invalid type */}
            <UrlField source="video" label="video" target="blank" />
            <TextField source="bluer" label="bluer" />
            <TextField source="instrument" label="Роль" />
            <ChipField source="orientation" />
            <EditButton />
            <DeleteButton />
         </Datagrid>
      </List>
   );
};
