import { Datagrid, DatagridHeaderProps, EditButton, List, SimpleList, TextField, useRecordContext } from "react-admin";
import { Box, TableHead, Typography } from "@mui/material";
import CustomField from "./CustomField";
import styleGrid from "./styleGrid";
/*
 */
export const ContactsList = () => {
   /*
    */
   const EmptyHeader = ({}: DatagridHeaderProps) => <TableHead />;

   return (
      <List title="Coll Band → Контакты" hasCreate={false}>
         <Datagrid bulkActionButtons={false} sx={styleGrid} header={<EmptyHeader />}>
            {/* <SimpleList sx={{ maxWidth: 700 }}>
            
         </SimpleList> */}
            <CustomField />
            <EditButton />
         </Datagrid>
      </List>
   );
};
