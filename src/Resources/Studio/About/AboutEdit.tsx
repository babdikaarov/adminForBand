import { ImageField, SaveButton, Toolbar } from "react-admin";
import { Edit, SimpleForm, TextInput, ImageInput } from "react-admin";

const EditToolBar = () => (
   <Toolbar>
      {/* <SaveButton /> */}
      <SaveButton
         label="transformin FormData rawFiles"
         transform={(data, options) => {
            console.log(options);

            const formDataImage = new FormData();
            formDataImage.append("orientation", data.orientation);
            formDataImage.append("image", data.image.rawFile);
            // FIXME video should be a string
            formDataImage.append("video", data.video.rawFile);
            console.log(formDataImage);
            console.log(data);
            return { data: formDataImage };
         }}
         type="button"
      />
   </Toolbar>
);

export const AboutEdit = () => {
   return (
      <Edit title="Cool Studio → О нас → изменить">
         <SimpleForm toolbar={<EditToolBar />}>
            {/* <TextInput source="id" disabled /> */}
            {/* <TextInput source="video" label="Youtube ссылка на видео" /> */}
            <TextInput source="orientation" label="Тип фотографии" />
            <ImageInput source="image" label="Постер">
               <ImageField source="src" title="Новое" />
            </ImageInput>
            <ImageField source="image" title="На сервере" />
            <ImageInput source="video" label="video">
               <ImageField source="src" title="Новое" />
            </ImageInput>
            <ImageField source="video" title="На сервере" />
         </SimpleForm>
      </Edit>
   );
};
