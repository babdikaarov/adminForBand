import { ImageField, UrlField } from "react-admin";
import { Edit, SimpleForm, TextInput, ImageInput } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";
/*
 */
export const AboutEdit = () => {
   /*
    */
   return (
      <Edit title="Cool Studio → О нас → изменить" redirect="list">
         <SimpleForm toolbar={<CustomSaveToolBar />}>
            <ImageInput source="newImage" label="Постер" multiple={false} accept="image/*">
               <ImageField source="src" title="" />
            </ImageInput>
            <TextInput source="youtubeUrl" title="youtubeUrl" />

            <h3> server data INFO:</h3>
            <ImageField source="image" title="На сервере" />
            <UrlField source="youtubeUrl" title="На сервере" target="blank" />
         </SimpleForm>
      </Edit>
   );
};
