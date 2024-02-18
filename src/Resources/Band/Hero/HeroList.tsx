import { List, Datagrid, EditButton } from "react-admin";
import { ClickVideo } from "../../../shared/ClickVideo";


export const HeroList = () => {
 
   
   return (
      <List title="Coll Band → Банер" pagination={false} exporter={false} hasCreate={false}>
         <Datagrid bulkActionButtons={false}>
         <ClickVideo source="video" label="Видео"/>
            <EditButton />
         </Datagrid>
      </List>
   );
};
