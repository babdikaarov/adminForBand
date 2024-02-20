import { List, Datagrid, TextField, EditButton, useAuthenticated } from "react-admin";

export const UsersList = () => {
    useAuthenticated();
    return (
        <List
            title="Настройки пользователей"
            pagination={false}
            hasCreate={true}
            exporter={false}
        >
            <Datagrid bulkActionButtons={false}>
                <TextField source="email" />
                <TextField source="fullName" />
                <TextField source="role" />
                <EditButton />
            </Datagrid>
        </List>
    );
};
