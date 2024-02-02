import { List, Datagrid, TextField, EditButton, ChipField, UrlField } from "react-admin";
import MyUrlField from "../../../shared/MyUrlField";

export const HeroList = () => {
   /* 
   {
  "id": 0,
  "title": "string",
  "text": "string",
  "video": "string",
  ubrat bluer orientation s backend
  "bluer": "string",
  "orientation": "PORTRAIT"
}
   */
   return (
      <List title="Cool Studio → Баннер" hasCreate={false}>
         <Datagrid bulkActionButtons={false}>
            <TextField source="title" title="name" />
            <TextField source="text" title="name" />
            <MyUrlField source="video" />
            {/* delete on production chipfield */}
            <ChipField source="orientation" title="name" />
            <EditButton />
         </Datagrid>
      </List>
   );
};
