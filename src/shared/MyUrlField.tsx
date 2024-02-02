import { Labeled, useRecordContext } from "react-admin";

const MyUrlField = ({ source }: { source: string }) => {
   const record = useRecordContext();
   if (!record) return null;

   const string = `${record[source]}`;

   return (
      <Labeled label={source}>
         <a href={string} title={string} target="blank">
            {string}
         </a>
      </Labeled>
   );
};

export default MyUrlField;
