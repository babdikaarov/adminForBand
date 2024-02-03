import { useRecordContext } from "react-admin";
import styles from "./style.module.css";
import { Box, Divider, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridColumnMenu, GridColumnMenuProps, GridRowsProp } from "@mui/x-data-grid";
const CustomField = () => {
   const record = useRecordContext({ source: "contacts" });
   console.log(record);
   const table = Object.entries(record).map(([key, value]) =>
      key === "id" ? null : (
         <div key={key} className={styles.div}>
            <h3>{key}</h3>
            <input placeholder="Это поле пустое " disabled value={value} />
         </div>
      ),
   );

   const customDisplay = (
      <>
         <Typography variant="h6" gutterBottom>
            Контактные данные
         </Typography>
         <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
               <div>{record.bandNumber}</div>
               <Divider />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
               <div>{record.studioNumber}</div>
               <Divider />
            </Box>
         </Box>
         <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
               <div>{record.whatsapp}</div>
               <Divider />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
               <div>{record.telegram}</div>
               <Divider />
            </Box>
         </Box>
         <div>{record.email}</div>
         <Divider />

         <br />
         <Typography variant="h6" gutterBottom>
            Социальные сети
         </Typography>
         <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
               <div>{record.instagram}</div>
               <Divider />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
               <div>{record.tiktok}</div>
               <Divider />
            </Box>
         </Box>
         <div>{record.youtube}</div>
         <Divider />

         <br />
         <Typography variant="h6" gutterBottom>
            Адресс
         </Typography>
         <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
               <div>{record.longitude}</div>
               <Divider />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
               <div>{record.latitude}</div>
               <Divider />
            </Box>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
               <div>{record.city}</div>
               <Divider />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
               <div>{record.organizationId}</div>
               <Divider />
            </Box>
         </Box>
         <div>{record.address}</div>
      </>
   );

   const columns: GridColDef[] = [
      { field: "col1", width: 150, sortable: false },
      { field: "col2", width: 150, sortable: false },
   ];

   const rows: GridRowsProp = [
      { id: 1, col1: `${record.bandNumber}`, col2: `${record.bandNumber}` },
      { id: 2, col1: `${record.bandNumber}`, col2: `${record.bandNumber}` },
      { id: 3, col1: `${record.bandNumber}`, col2: `${record.bandNumber}` },
   ];

   const customGrid = (
      <DataGrid
         rows={rows}
         columns={columns}
         disableColumnMenu
         disableColumnSelector
         disableRowSelectionOnClick
         disableColumnFilter
         disableDensitySelector
         disableEval
      />
   );
   return record ? table : null;
};

export default CustomField;
