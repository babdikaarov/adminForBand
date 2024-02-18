import { ImageField, ImageInput } from "react-admin";
import { Create, SimpleForm, TextInput } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";


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
         <SimpleForm toolbar={<CustomSaveToolBar />}>
         <ImageInput source="newImage" label="Фото ученика" multiple={false} accept="image/*">
               <ImageField source="src" title="Фото ученика" />
            </ImageInput>
            <TextInput source="name" title="name" />
            <TextInput source="reviews" title="name" />
         </SimpleForm>
      </Create>
   );
};
