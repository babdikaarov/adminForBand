import { Edit, FileField, FileInput, SimpleForm, TextInput, UrlField, useRecordContext } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";

export const HeroEdit = () => {
   const record = useRecordContext();
   console.log(record);

   return (
      <Edit title="Cool Studio → Баннер → изменить">
         <SimpleForm toolbar={<CustomSaveToolBar />}>
            <TextInput source="title" title="name" />
            <TextInput source="text" title="name" />
            <FileInput source="newVideo" accept="video/*" multiple={false}>
               <FileField source="src" title="title" target="blank" />
            </FileInput>
            <h3> current data INFO:</h3>
            <UrlField source="video" title="На сервере" target="blank" />
         </SimpleForm>
      </Edit>
   );
};
