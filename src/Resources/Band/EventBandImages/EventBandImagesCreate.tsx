import { Create,  SimpleForm, TextInput } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";
import { ModalImage } from "../../../shared/ModalImage";
import CustomSelectInput from "../../../shared/CustomSelectInput";

export const EventBandImagesCreate = () => {
   return (
      <Create title="Coll Band → Альбомы → изменить Альбом" redirect="list">
         <SimpleForm toolbar={<CustomSaveToolBar />}>
         <TextInput disabled source="id" />
               <ModalImage source="image" />
               <ModalImage source="originalImage" />
               <CustomSelectInput  />
               <TextInput source="coverImage" />
            
         </SimpleForm>
      </Create>
   );
};
