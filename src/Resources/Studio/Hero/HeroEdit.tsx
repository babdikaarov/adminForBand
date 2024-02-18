import { Edit, FileField, FileInput, SimpleForm, TextInput, useRecordContext } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";
import { ClickVideo } from "../../../shared/ClickVideo";

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
            <h3> На сервере:</h3>
            <ClickVideo source="video" label="Видео"/>
         </SimpleForm>
      </Edit>
   );
};
