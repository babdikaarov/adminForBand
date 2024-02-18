import { List, Datagrid, TextField, EditButton, DeleteButton, SimpleShowLayout, RichTextField } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";

export const TeacherList = () => {
 
   const DescriptionShow = () => (
   <SimpleShowLayout>
       <RichTextField source="description" />
   </SimpleShowLayout>
);

   return (
      <List title="Cool Studio → Преподаватели" pagination={false} exporter={false} hasCreate={true}>
         <Datagrid bulkActionButtons={false} expand={<DescriptionShow/>} title="click to expand description!"  expandSingle rowClick="expand">
            <TextField source="name"  />
            <ModalImage source="image"  />
            <TextField source="urlInstagram"  />
            <TextField source="position"  />
            <EditButton />
            <DeleteButton mutationMode="pessimistic"/>
         </Datagrid>
      </List>
   );
};
