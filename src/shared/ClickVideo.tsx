import { Identifier, RaRecord, UseRecordContextParams } from "react-admin";
import { useRecordContext } from "react-admin";
import { Link } from "@mui/material";


export const ClickVideo = (props: UseRecordContextParams<RaRecord<Identifier>> | undefined) => {
   const record = useRecordContext(props);

   return record ? (
       
         <Link
         href={record[props?.source]}
         target="_blank"
         variant="body2"
     >
         Посмотреть видео
     </Link>
     
   ) : null;
};
