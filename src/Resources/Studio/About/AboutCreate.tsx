import { FileField, FileInput, ImageField } from "react-admin";
import { Create, SimpleForm, TextInput, ImageInput } from "react-admin";
import CustomSaveButton from "./CustomSaveButton";
import transfromCreate from "./transfromCreate";

export const AboutCreate = () => {
   return (
      <Create title="Cool Studio → О нас → создать" redirect="list">
         <SimpleForm toolbar={<CustomSaveButton transform={transfromCreate} />}>
            <TextInput source="orientation" label="Тип фотографии" />
            <ImageInput source="image" label="Постер">
               <ImageField source="src" title="title" />
            </ImageInput>
            <FileInput source="video" label="video">
               <FileField source="src" title="title" />
            </FileInput>
         </SimpleForm>
      </Create>
   );
};
