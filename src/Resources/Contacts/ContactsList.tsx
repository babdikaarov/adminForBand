import { Datagrid, DatagridHeaderProps, EditButton, List, useRecordContext } from "react-admin";
import styles from "./style.module.css";
import { TableHead, TableRow } from "@mui/material";

export const ContactsList = () => {
   const styleGrid = {
      "& a": {
         minWidth: "30px",
         position: "absolute",
         top: "-30px",
         right: "90px",
         fontSize: "11.1429px",
         fontWeight: "500",
      },
      "@media (max-width: 600px)": {
         "& a": {
            top: "-45px",
            right: "50px",
         },
      },
      "& .RaDatagrid-headerCell": {
         // backgroundColor: "#363D40",
         backgroundColor: "iherite",
         border: "none",
      },
   };

   return (
      <List title="Coll Band → Контакты" hasCreate={false}>
         <Datagrid bulkActionButtons={false} sx={styleGrid} header={<EmptyHeader />}>
            <CustomField />
            <EditButton />
         </Datagrid>
      </List>
   );
};

const EmptyHeader = ({}: DatagridHeaderProps) => <TableHead />;

const CustomField = () => {
   const record = useRecordContext({ source: "contacts" });
   const table = Object.entries(record).map(([key, value]) =>
      key === "id" ? null : (
         <div key={key} className={styles.div}>
            <h3>{key}</h3>
            <input placeholder="Это поле пустое " disabled value={value} />
         </div>
      ),
   );
   return record ? table : null;
};
