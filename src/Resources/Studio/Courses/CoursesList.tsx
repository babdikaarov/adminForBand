import { List, Datagrid, EditButton, DeleteButton, TextField } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";

export const CoursesList = () => {

   return (
      <List title="Cool Studio → Направления" pagination={false} exporter={false} hasCreate={true}>
         <Datagrid bulkActionButtons={false}>
            <TextField source="name" />
            <ModalImage source="image" />
            {/* <TextField source="bluer" /> */}
            <EditButton />
            <DeleteButton mutationMode="pessimistic"/>
         </Datagrid>
      </List>
   );
};
