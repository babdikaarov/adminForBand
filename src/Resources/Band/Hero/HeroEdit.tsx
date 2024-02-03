import { Edit, SimpleForm, FileInput, UrlField, FileField } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";
import CustomSelectInput from "../../../shared/CustomSelectInput";

export const HeroEdit = () => {
   return (
      <Edit title="Coll Band → Банер → изменить">
         <SimpleForm toolbar={<CustomSaveToolBar />}>
            <FileInput source="newVideo" accept="video/*" multiple={false}>
               <FileField source="src" title="title" target="blank" />
            </FileInput>
            <CustomSelectInput />
            <h3> current data INFO:</h3>
            <UrlField source="video" title="На сервере" target="blank" />
         </SimpleForm>
      </Edit>
   );
};
