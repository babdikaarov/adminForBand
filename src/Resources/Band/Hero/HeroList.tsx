import { List, Datagrid, EditButton, ChipField, UrlField } from "react-admin";
/*
 */
export const HeroList = () => {
   /*
    */
   return (
      <List title="Coll Band → Банер" hasCreate={false}>
         <Datagrid bulkActionButtons={false}>
            <UrlField source="video" target="blank" />
            {/* delete on production chipfield */}
            <ChipField source="orientation" />
            <EditButton />
         </Datagrid>
      </List>
   );
};
