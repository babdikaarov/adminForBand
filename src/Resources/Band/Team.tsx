import {
   List,
   Datagrid,
   TextField,
   ImageField,
   EditButton,
   DeleteButton,
   SelectField,
   FileField,
   FileInput,
   SelectInput,
   useNotify,
   useRedirect,
} from "react-admin";
import { Create, Edit, SimpleForm, TextInput, ImageInput } from "react-admin";

export const TeamList = () => {
   return (
      <List title="Наша команда" hasCreate={true}>
         <Datagrid>
            <TextField source="id" />
            <TextField source="name" label="Имя" />
            <TextField source="role" label="Роль" />
            <ImageField source="image" label="photo" />
            <SelectField
               source="orientation"
               choices={[
                  { id: "lanscape", name: "Портрет" },
                  { id: "portrait", name: "Альбом" },
               ]}
               label="Фотография"
            />
            <FileField source="video" label="video" />
            <EditButton />
            <DeleteButton />
         </Datagrid>
      </List>
   );
};

export const TeamCreate = () => {
   const notify = useNotify();
   const redirect = useRedirect();

   const onSuccess = () => {
      notify(`Changes saved`);
      redirect(`/why_us_band`);
   };
   const defaultValue = () => ({ orientation: "portrait" });
   return (
      <Create title="Наша команда - создать карточку" mutationOptions={{ onSuccess }}>
         <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" label="Имя" />
            <TextInput source="role" label="Роль" />
            <ImageInput source="image" label="photo">
               <ImageField source="src" title="title" />
            </ImageInput>
            <SelectInput
               source="orientation"
               choices={[
                  { _orientation: "lanscape", name: "Портретная" },
                  { _orientation: "portrait", name: "Альбомная" },
               ]}
               optionValue="_orientation"
               defaultValue={defaultValue}
               label="Фотография"
            />

            <FileInput
               source="video"
               //  format={(value) => {
               //     const formData = new FormData();
               //     formData.append("video", value.rawFile); // Append the rawFile to the FormData
               //     console.log(value.src); // Optional: Log the FormData object for debugging
               //     return value.src; // Return the FormData object
               //  }}
               //  parse={(value) => (value && value.video ? [{ src: value.video }] : [])}
            >
               <FileField source="src" title="title" />
            </FileInput>
         </SimpleForm>
      </Create>
   );
};

export const TeamEdit = () => {
   return (
      <Edit title="Наша команда - изменить карточку">
         <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" label="Имя" />
            <TextInput source="role" label="Роль" />
            <ImageInput source="image" label="photo">
               <ImageField source="src" title="title" />
            </ImageInput>
            <SelectInput
               source="orientation"
               choices={[
                  { _orientation: "lanscape", name: "Портретная" },
                  { _orientation: "portrait", name: "Альбомная" },
               ]}
               optionValue="_orientation"
               label="Фотография"
            />

            <FileInput source="attachments">
               <FileField source="src" title="title" />
            </FileInput>
         </SimpleForm>
      </Edit>
   );
};

export default {
   list: TeamList,
   create: TeamCreate,
   edit: TeamEdit,
};
