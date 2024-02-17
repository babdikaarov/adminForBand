import { ImageField, ImageInput, SaveButton } from "react-admin";
import { Create, SimpleForm, TextInput } from "react-admin";
import CustomSelectInput from "../../../shared/CustomSelectInput";


export const TestimonaialsCreate = () => {
   /* 
       {
    "id": 0,
    "image": "string",
    "bluer": "string",
    "name": "string",
    "reviews": "string",
    "orientation": "PORTRAIT"
  }
   */
   return (
      <Create title="Cool Studio → Отзывы учеников → создать" redirect="list">
         <SimpleForm toolbar={<SaveButton />}>
         <ImageInput source="newImage" label="Фото ученика" multiple={false} accept="image/*">
               <ImageField source="src" title="Фото ученика" />
            </ImageInput>
            <TextInput source="name" title="name" />
            <TextInput source="reviews" title="name" />
            <CustomSelectInput />
         </SimpleForm>
      </Create>
   );
};
