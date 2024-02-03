import { Datagrid, DatagridHeaderProps, EditButton, List, SimpleList, TextField, useRecordContext } from "react-admin";
import { TableHead } from "@mui/material";
import CustomField from "./CustomField";
import styleGrid from "./styleGrid";
/*
 */
export const ContactsList = () => {
   /*
   this list component still in developpemnt
    */
   const EmptyHeader = ({}: DatagridHeaderProps) => <TableHead />;

   return (
      <List title="Coll Band → Контакты" hasCreate={false}>
         <Datagrid bulkActionButtons={false} sx={styleGrid} header={<EmptyHeader />}>
            <CustomField />
            <EditButton />
         </Datagrid>
      </List>
   );
};
