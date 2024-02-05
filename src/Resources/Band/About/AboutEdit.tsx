import { Edit, ImageField, ImageInput, SimpleForm } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";

export const AboutEdit = () => {
   return (
      <Edit title="Coll Band → О нас → изменить" /* redirect="list" */>
         <SimpleForm toolbar={<CustomSaveToolBar />}>
            <ImageInput source="newImage" label="Постер" multiple={false} accept="image/*">
               <ImageField source="src" title="" />
            </ImageInput>
            <h3> server data INFO:</h3>
            <ImageField source="image" title="На сервере" />
         </SimpleForm>
      </Edit>
   );
};
