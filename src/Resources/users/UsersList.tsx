import { List, Datagrid, TextField, EditButton} from "react-admin";
/*
 */
export const UsersList = () => {
   // ubrat  orientation s backend
   /* 
   email
: 
"is.anarkin@gmail.com"
fullName
: 
"Dair Anarkin"
id
: 
1
role
: 
"ADMIN"
   */
   return (
      <List title="Настройки пользователей" hasCreate={true}>
         <Datagrid bulkActionButtons={false}>
            {/* <ModalImage source="image" label="Постер" /> */}
            {/* <UrlField source="youtubeUrl" label="Youtube ссылка на видео" target="blank" /> */}
            {/* bluer orientation убрать потом на продакшне */}
            {/* <ChipField source="orientation" /> */}
            <TextField source="id" />
            <TextField source="email" />
            <TextField source="fullName" />
            <TextField source="role" />
            <EditButton />
         </Datagrid>
      </List>
   );
};
