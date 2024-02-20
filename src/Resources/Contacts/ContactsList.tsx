import { Datagrid, DatagridHeaderProps, EditButton, List } from "react-admin";
import { TableHead } from "@mui/material";
import CustomField from "./CustomField";
import styleGrid from "./styleGrid";
/*
 */
export const ContactsList = () => {
    /*
   this list component still in developpemnt
    */
    // eslint-disable-next-line no-empty-pattern
    const EmptyHeader = ({}: DatagridHeaderProps) => <TableHead />;

    return (
        <List
            title="Coll Band → Контакты"
            pagination={false}
            exporter={false}
            hasCreate={false}
        >
            <Datagrid
                bulkActionButtons={false}
                sx={styleGrid}
                header={<EmptyHeader />}
            >
                <CustomField />
                <EditButton />
            </Datagrid>
        </List>
    );
};
