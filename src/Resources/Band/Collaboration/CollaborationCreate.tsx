import { Create, SimpleForm, TextInput } from "react-admin";
import CustomSelectInput from "../../../shared/CustomSelectInput";
export const CollaborationCreate = () => {
   // const postDefaultValue = () => ({ id: uuid(), created_at: new Date(), nb_views: 0 });
   return (
      <Create title="Coll Band → Коллаборация → создать" redirect="list">
         {/* <SimpleForm toolbar={<SaveButton />} defaultValues={postDefaultValue}> */}
         <SimpleForm>
            <TextInput source="name" />
            <TextInput source="image" />
            <CustomSelectInput />
         </SimpleForm>
      </Create>
   );
};
