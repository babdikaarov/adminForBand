import { Link, List, Datagrid, TextField, EditButton, DeleteButton, DateField } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";
import { rcs } from "../../rcs";
import { Button } from '@mui/material';
// import { useParams, Link } from "react-router-dom";

export const EventBandList = () => {
  

   return (
      <List title="Coll Band → Альбомы" hasCreate={true} >
         <Datagrid rowClick="true">
            <TextField source="id" />
            <ModalImage source="coverImage" label="Обложка Альбома" />
            <DateField source="date" />
            <TextField source="name" />
            {/* <ShowListImages /> */}
            <EditButton />
            <DeleteButton />
         </Datagrid>
      </List>
   );
};

