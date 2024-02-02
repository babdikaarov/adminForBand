import { List, Datagrid, EditButton, ChipField, Labeled } from "react-admin";
import MyUrlField from "../../../shared/MyUrlField";

export const HeroList = () => {
   /* 
   {
  "id": 0,
  "video": "string",
  ubrat  orientation s backend
  "orientation": "PORTRAIT"
}
   */

   return (
      <List title="Coll Band → Банер" hasCreate={false}>
         <Datagrid bulkActionButtons={false}>
            <MyUrlField source="video" />
            {/* delete on production chipfield */}
            <ChipField source="orientation" />
            <EditButton />
         </Datagrid>
      </List>
   );
};
