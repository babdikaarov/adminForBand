import { Datagrid, EditButton, List, useRecordContext } from "react-admin";
import styles from "./style.module.css";

export const ContactsList = () => {
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
         backgroundColor: "#363D40",
         border: "none",
      },
   };

   return (
      <List title="Coll Band → Контакты" hasCreate={false}>
         <Datagrid bulkActionButtons={false} sx={styleGrid}>
            <CustomField />
            <EditButton />
         </Datagrid>
      </List>
   );
};
