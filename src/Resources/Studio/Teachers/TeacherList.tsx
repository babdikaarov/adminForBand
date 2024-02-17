import { List, Datagrid, TextField, EditButton, DeleteButton, ChipField } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";

export const TeacherList = () => {
   /* 
     {
    "id": 0,
    "name": "string",
    "image": "string",
    "urlInstagram": "string",
    "position": "string",
    "description": "string",
    "orientation": "PORTRAIT"
  }
   */
   return (
      <List title="Cool Studio → Преподаватели" hasCreate={true}>
         <Datagrid>
            <TextField source="id" />
            <TextField source="name"  />
            <ModalImage source="image"  />
            <TextField source="urlInstagram"  />
            <TextField source="position"  />
            <TextField source="description"  />
            <ChipField source="orientation"  />
            <EditButton />
            <DeleteButton />
         </Datagrid>
      </List>
   );
};