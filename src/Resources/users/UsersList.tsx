import { List, Datagrid, TextField, EditButton} from "react-admin";


export const UsersList = () => {
   return (
      <List title="Настройки пользователей" pagination={false} hasCreate={true} exporter={false}>
         <Datagrid bulkActionButtons={false} >
            <TextField source="email" />
            <TextField source="fullName" />
            <TextField source="role" />
            <EditButton />
         </Datagrid>
      </List>
   );
};
