import {
    List,
    Datagrid,
    EditButton,
    DeleteButton,
    TextField /* UrlField */,
    Labeled,
    CreateButton,
    TopToolbar,
} from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";

export const PartnersList = () => {
    return (
        <List
            title="Coll Band → Клиенты"
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
                <Labeled label="Изображение">
                    <ModalImage
                        source="image"
                        label={false}
                    />
                </Labeled>
                <TextField
                    source="url"
                    label="Наименование"
                />
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
