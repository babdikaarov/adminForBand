import {
   Edit,
   FieldTitle,
   FileField,
   FileInput,
   ImageField,
   ImageInput,
   SimpleForm,
   TabbedForm,
   TextInput,
} from "react-admin";
import CustomSelectInput from "../../../shared/CustomSelectInput";
import CustomSaveButton from "../../../shared/CustomSaveButton";
import transformTeam from "./transformTeam";
import { handlePreview } from "../../../modules/handlePreview";

export const TeamEdit = () => {
   return (
      <Edit title="Coll Band → Наша команда → изменить карточку">
         <SimpleForm toolbar={<CustomSaveButton transform={transformTeam} />}>
            <FieldTitle label="Карточка спереди" />
            <ImageInput format={handlePreview} source="image" label="Постер" multiple={false} accept="image/*">
               <ImageField source="src" title="" />
            </ImageInput>
            <CustomSelectInput />
            <FieldTitle label="Карточка сзади" />
            <FileInput source="video" accept="video/*" multiple={false}>
               <FileField source="src" title="title" target="blank" />
            </FileInput>
            <FieldTitle label="Детали картчочки" />
            <TextInput source="instrument" label="Роль" defaultValue={""} />
            <TextInput source="name" label="Имя" />
         </SimpleForm>
         {/* <TabbedForm toolbar={<CustomSaveButton transform={transformTeam} />}>
            <TabbedForm.Tab label="Карточка спереди">
               <ImageInput format={handlePreview} source="image" label="Постер" multiple={false} accept="image/*">
                  <ImageField source="src" title="" />
               </ImageInput>
               <CustomSelectInput />
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Карточка сзади">
               <FileInput source="video" accept="video/*" multiple={false}>
                  <FileField source="src" title="title" target="blank" />
               </FileInput>
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Текст">
               <TextInput source="instrument" label="Роль" defaultValue={() => emptyStringValue} />
               <TextInput source="name" label="Имя" />
            </TabbedForm.Tab>
         </TabbedForm> */}
      </Edit>
   );
};
