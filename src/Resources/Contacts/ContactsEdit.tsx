import { Edit, SaveButton, TabbedForm, TextInput } from "react-admin";
import validators from "./validators";

export const ContactsEdit = () => {
   // custom form check https://marmelab.com/react-admin/Form.html
   // https://marmelab.com/react-admin/SimpleForm.html#complex-input-layout
   return (
      <Edit title="Coll Band → Контакты → изменить">
         <TabbedForm toolbar={<SaveButton label="Сохранить" />}>
            <TabbedForm.Tab label="Контактные данные">
               <TextInput source="bandNumber" validate={validators.validateBandNumber} />
               <TextInput source="studioNumber" validate={validators.validateStudioNumber} />
               <TextInput source="whatsapp" validate={validators.validateWhatsapp} />
               <TextInput source="telegram" validate={validators.validateTelegramField} />
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Адресс">
               <TextInput source="longitude" validate={validators.validateLongitude} />
               <TextInput source="city" validate={validators.validateAddressField} />
               <TextInput source="latitude" validate={validators.validateLatitude} />
               <TextInput source="organizationId" validate={validators.validateOrganizationIdField} />
               <TextInput source="address" validate={validators.validateAddressField} />
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Социальные сети">
               <TextInput source="instagram" validate={validators.validateInstagramField} />
               <TextInput source="youtube" validate={validators.validateYoutubeField} />
               <TextInput source="tiktok" validate={validators.validateTikTokField} />
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Почта">
               <TextInput source="email" validate={validators.validateEmailField} />
            </TabbedForm.Tab>
         </TabbedForm>
      </Edit>
   );
};
