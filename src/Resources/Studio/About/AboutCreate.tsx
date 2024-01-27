import { ImageField } from "react-admin";
import { Create, SimpleForm, TextInput, ImageInput } from "react-admin";

export const AboutCreate = () => {
   // const postDefaultValue = () => ({ id: uuid(), created_at: new Date(), nb_views: 0 });
   return (
      <Create title="Cool Studio → О нас → создать">
         {/* <SimpleForm toolbar={<SaveButton />} defaultValues={postDefaultValue}> */}
         <SimpleForm /* toolbar={<SaveButton />} */>
            {/* <TextInput source="id" disabled /> */}
            {/* <TextInput source="video" label="Youtube ссылка на видео" /> */}
            <TextInput source="orientation" label="Тип фотографии" />
            <ImageInput source="image" label="Постер">
               <ImageField source="src" title="title" />
            </ImageInput>
            <ImageInput source="video" label="video">
               <ImageField source="src" title="title" />
            </ImageInput>
         </SimpleForm>
      </Create>
   );
};