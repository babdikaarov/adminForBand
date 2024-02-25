import { List, Datagrid, TextField, EditButton, useAuthenticated, FunctionField, CreateButton } from "react-admin";

export const UsersList = () => {
    useAuthenticated();
    return (
        <List
            title="Настройки пользователей"
            pagination={false}
            hasCreate={true}
            exporter={false}
            actions={<CreateButton label="Создать" />}
        >
            <Datagrid
                bulkActionButtons={false}
                rowClick={"edit"}
            >
                <TextField
                    source="email"
                    label="Почта"
                />
                <TextField
                    source="fullName"
                    label="Полное имя"
                />
                {/* <TextField source="role" /> */}
                <FunctionField
                    label="Тип"
                    render={(record: { role: string }) => `${record.role === "ADMIN" ? "Владелец" : "Пользотель"}`}
                />
                <EditButton label="Изменить" />
            </Datagrid>
        </List>
    );
};
