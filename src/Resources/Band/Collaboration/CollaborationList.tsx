import { List, Datagrid, TextField, EditButton, DeleteButton, CreateButton, Labeled, TopToolbar } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";

export const CollaborationList = () => {
    return (
        <List
            title="Cool Band → Коллаборация"
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
                // rowClick="edit"
            >
                <TextField
                    source="name"
                    label="Имя"
                />
                <Labeled label="Изображение">
                    <ModalImage
                        source="image"
                        label={false}
                    />
                </Labeled>
                <EditButton label="Изменить" />
                <DeleteButton
                    label="Удалить"
                    mutationMode="pessimistic"
                />
            </Datagrid>
            <br />
            <br />
            <br />
            <br />
        </List>
    );
};
