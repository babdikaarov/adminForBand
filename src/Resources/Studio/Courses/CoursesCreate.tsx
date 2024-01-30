import { TextInput } from "react-admin";
import { Create, SimpleForm } from "react-admin";
import CustomSelectInput from "../../../shared/CustomSelectInput";

export const CoursesCreate = () => {
   // const postDefaultValue = () => ({ id: uuid(), created_at: new Date(), nb_views: 0 });
   return (
      <Create title="Cool Studio → Направления → создать" redirect="list">
         {/* <SimpleForm toolbar={<SaveButton />} defaultValues={postDefaultValue}> */}
         <SimpleForm>
            <TextInput source="name" title="name" />
            <TextInput source="image" title="name" />
            <CustomSelectInput />
         </SimpleForm>
      </Create>
   );
};
