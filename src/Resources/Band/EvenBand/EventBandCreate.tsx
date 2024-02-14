import { Create, DateInput, SimpleForm, TextInput } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";

export const EventBandCreate = () => {
   /* 
   {
  "date": "2024-02-13",
  "name": "string"
}
   */
   return (
      <Create title="Coll Band → Альбомы → создать Альбом" redirect="list">
         <SimpleForm toolbar={<CustomSaveToolBar />}>
         <TextInput source="name" />
         <DateInput source="date" />
         </SimpleForm>
      </Create>
   );
};
