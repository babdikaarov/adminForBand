export default {
   "& a": {
      minWidth: "30px",
      position: "absolute",
      top: "-25px",
      right: "10px",
      fontSize: "11.1429px",
      fontWeight: "500",
   },
   "@media (max-width: 600px)": {
      "& a": {
         top: "-40px",
         right: "10px",
      },
   },
   "@media (max-width: 500px)": {
      "& a": {
         top: "-35px",
         right: "10px",
      },
   },
   "& .RaDatagrid-headerCell": {
      backgroundColor: "iherite",
      border: "none",
   },
};
