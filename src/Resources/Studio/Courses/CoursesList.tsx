import { List, Datagrid, EditButton, DeleteButton, TextField, Labeled, CreateButton, TopToolbar } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";
import { useMediaQuery } from "@mui/material";

export const CoursesList = () => {
    const is500 = useMediaQuery("(max-width:500px)");

    return (
        <List
            title="Cool Studio → Направления"
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
                    label="Напрваление"
                />
                <Labeled label="Изображение">
                    <ModalImage
                        source="image"
                        label={false}
                    />
                </Labeled>
                {/* <TextField source="bluer" /> */}
                {!is500 ? <EditButton label="Изменить" /> : null}
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
