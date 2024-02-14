import { ChipField, DeleteButton, EditButton, List,Datagrid, TextField } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";

export const Album = () => {
  return (
  <List title="Coll Band → list of all images" hasCreate={false} >
  <Datagrid >
      <TextField source="id" />
      <ModalImage source="image" />
      <ModalImage source="originalImage" />
      <ChipField source="orientation" />
      <TextField source="bluer" />
      <TextField source="coverImage" />
      <EditButton />
   <DeleteButton />
  </Datagrid>
</List>
  )
};

/* 
    "id": 4,
    "image": "http://209.38.228.54:8080/api/event_images/compImage/4",
    "originalImage": "http://209.38.228.54:8080/api/event_images/origImage/4",
    "orientation": "PORTRAIT",
    "bluer": "INSTASAMKA",
    "coverImage": true
  }
*/
