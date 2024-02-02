import { Edit, SaveButton, TabbedForm, TextInput } from "react-admin";
import validators from "./validators";

export const ContactsEdit = () => {
   // custom form check https://marmelab.com/react-admin/Form.html
   // https://marmelab.com/react-admin/SimpleForm.html#complex-input-layout
   return (
      <Edit title="Coll Band → Контакты → изменить">
         <TabbedForm toolbar={<SaveButton label="Сохранить" />}>
            <TabbedForm.Tab label="Контактные данные">
               <TextInput source="bandNumber" />
               <TextInput source="studioNumber" />
               <TextInput source="whatsapp" />
               <TextInput source="telegram" />
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Адресс">
               <TextInput source="longitude" />
               <TextInput source="city" />
               <TextInput source="latitude" />
               <TextInput source="organizationId" />
               <TextInput source="address" />
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Социальные сети">
               <TextInput source="instagram" />
               <TextInput source="youtube" />
               <TextInput source="tiktok" />
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Почта">
               <TextInput source="email" />
            </TabbedForm.Tab>
         </TabbedForm>
      </Edit>
   );
};
