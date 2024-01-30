import { FileField, FileInput, ImageField, UrlField } from "react-admin";
import { Edit, SimpleForm, TextInput, ImageInput, required } from "react-admin";
import CustomSaveButton from "./CustomSaveButton";
import transformEdit from "./transformEdit";

export const AboutEdit = () => {
   return (
      <Edit title="Cool Studio → О нас → изменить" redirect="list">
         <SimpleForm toolbar={<CustomSaveButton transform={transformEdit} />}>
            <TextInput source="orientation" label="Тип фотографии" />
            <ImageInput source="image" label="Постер">
               <ImageField source="src" title="Новое" />
            </ImageInput>
            <FileInput source="video" label="video" validate={[required()]}>
               <FileField source="src" title="title" />
            </FileInput>
            <h3> To 4to na servere</h3>
            <UrlField source="image" title="На сервере" target="blank" />
            <UrlField source="video" title="На сервере" target="blank" />
         </SimpleForm>
      </Edit>
   );
};
