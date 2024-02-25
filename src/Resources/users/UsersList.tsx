import {
    List,
    Datagrid,
    TextField,
    EditButton,
    useAuthenticated,
    FunctionField,
    CreateButton,
    TopToolbar,
} from "react-admin";

export const UsersList = () => {
    useAuthenticated();
    return (
        <List
            title="Настройки пользователей"
            pagination={false}
            exporter={false}
            hasCreate={true}
            actions={
                <TopToolbar>
                    <CreateButton label="Добавить" />
                </TopToolbar>
            }
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
