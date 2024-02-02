import { Edit, ImageField, ImageInput, SimpleForm, UrlField } from "react-admin";
import CustomSaveButton from "../../../shared/CustomSaveButton";
import transformAbout from "./transformAbout";
import { handlePreview } from "../../../modules/handlePreview";

export const AboutEdit = () => {
   return (
      <Edit title="Coll Band → О нас → изменить" /* redirect="list" */>
         <SimpleForm toolbar={<CustomSaveButton transform={transformAbout} />}>
            <div>postav suda validaciu bez kartinki back end ne obnovitsy</div>
            <ImageInput format={handlePreview} source="image" label="Постер" multiple={false} accept="image/*">
               <ImageField source="src" title="" />
            </ImageInput>

            <h3> current data INFO:</h3>
            <UrlField source="image" title="На сервере" target="blank" />
         </SimpleForm>
      </Edit>
   );
};
