import { Edit, SimpleForm, FileInput, UrlField, FileField } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";

export const HeroEdit = () => {
   return (
      <Edit title="Coll Band → Банер → изменить">
         <SimpleForm toolbar={<CustomSaveToolBar />}>
            <FileInput source="newVideo" accept="video/*" multiple={false}>
               <FileField source="src" title="title" target="blank" />
            </FileInput>
            <h3> На сервере сейчас:</h3>
            <UrlField source="video" title="На сервере" target="blank" />
         </SimpleForm>
      </Edit>
   );
};
