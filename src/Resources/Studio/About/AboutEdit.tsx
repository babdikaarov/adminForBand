import { ImageField } from "react-admin";
import { Edit, SimpleForm, TextInput, ImageInput } from "react-admin";

export const AboutEdit = () => {
   return (
      <Edit title="Cool Studio → О нас → изменить">
         <SimpleForm /* toolbar={<SaveButton />} */>
            <TextInput source="id" disabled />
            <TextInput source="orientation" label="orientation" />
            <ImageInput source="image" label="image">
               <ImageField source="src" title="title" />
            </ImageInput>
            <ImageInput source="video" label="video">
               <ImageField source="src" title="title" />
            </ImageInput>
         </SimpleForm>
      </Edit>
   );
};
