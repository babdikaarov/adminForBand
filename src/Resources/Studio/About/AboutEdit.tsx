import { FileInput, ImageField, TextField } from "react-admin";
import { Edit, SimpleForm, TextInput, ImageInput } from "react-admin";
import CustomSaveButton from "./CustomSaveButton";
import transformEdit from "./transformEdit";

export const AboutEdit = () => {
   return (
      <Edit title="Cool Studio → О нас → изменить" redirect="list">
         <SimpleForm toolbar={<CustomSaveButton transform={transformEdit} />}>
            {/* <TextInput source="id" disabled /> */}
            {/* <TextInput source="video" label="Youtube ссылка на видео" /> */}
            <TextInput source="orientation" label="Тип фотографии" />
            <ImageInput source="image" label="Постер">
               <ImageField source="src" title="Новое" />
            </ImageInput>
            <ImageField source="image" title="На сервере" />
            <FileInput source="video" label="video">
               <TextField source="video" title="На сервере" />
            </FileInput>
            {/* <ImageField source="video" title="На сервере" /> */}
            {/* <UrlField source="src" title="Новое" /> */}
         </SimpleForm>
      </Edit>
   );
};
