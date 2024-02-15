import { ImageField, ImageInput, SaveButton } from "react-admin";
import { Edit, SimpleForm, TextInput } from "react-admin";
import CustomSelectInput from "../../../shared/CustomSelectInput";


export const TestimonaialsEdit = () => {
   return (
      <Edit title="Cool Studio → Отзывы учеников → изменить" redirect="list">
         <SimpleForm toolbar={<SaveButton />}>
         <ImageInput source="newImage" label="Фото ученика" multiple={false} accept="image/*">
               <ImageField source="src" title="Фото ученика" />
            </ImageInput>
            <TextInput source="name" title="name" />
            <TextInput source="reviews" title="name" />
            <CustomSelectInput />
         </SimpleForm>
      </Edit>
   );
};
