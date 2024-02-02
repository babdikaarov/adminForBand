import { Edit, FileField, FileInput, SimpleForm, TextInput, UrlField } from "react-admin";
import CustomSaveButton from "../../../shared/CustomSaveButton";
import transformHero from "./transformHero";

export const HeroEdit = () => {
   return (
      <Edit title="Cool Studio → Баннер → изменить" redirect="list">
         <SimpleForm toolbar={<CustomSaveButton transform={transformHero} />}>
            <TextInput source="title" title="name" />
            <TextInput source="text" title="name" />
            <FileInput source="video" accept="video/*" multiple={false}>
               <FileField source="src" title="title" target="blank" />
            </FileInput>
            <h3> current data INFO:</h3>
            <UrlField source="video" title="На сервере" target="blank" />
         </SimpleForm>
      </Edit>
   );
};
