import { List, Datagrid, EditButton, DeleteButton, TextField } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";

export const CoursesList = () => {

   return (
      <List title="Cool Studio → Направления" hasCreate={true}>
         <Datagrid>
            <TextField source="name" />
            <ModalImage source="image" />
            <TextField source="bluer" />
            <EditButton />
            <DeleteButton />
         </Datagrid>
      </List>
   );
};
