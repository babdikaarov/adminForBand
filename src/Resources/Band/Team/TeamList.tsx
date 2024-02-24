import { List, Datagrid, TextField, EditButton, DeleteButton, ChipField, Labeled, CreateButton } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";
import { ClickVideo } from "../../../shared/ClickVideo";
import { useMediaQuery } from "@mui/material";

export const TeamList = () => {
    const is870 = useMediaQuery("(max-width:870px)");
    const is660 = useMediaQuery("(max-width:660px)");
    const is450 = useMediaQuery("(max-width:450px)");
    return (
        <List
            title="Coll Band → Наша команда"
            // filter={{ id: 1 }}
            pagination={false}
            exporter={false}
            hasCreate={true}
            actions={<CreateButton label="Добавить" />}
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

                <ClickVideo
                    source="video"
                    label="Видео"
                    text="видео"
                />
                {!is660 ? (
                    <TextField
                        source="instrument"
                        label="Роль"
                    />
                ) : null}
                {!is870 ? <ChipField source="orientation" /> : null}
                {!is450 ? <EditButton label={is870 ? "" : "Изменить"} /> : null}
                <DeleteButton
                    mutationMode="pessimistic"
                    label={is870 ? "" : "Удалить"}
                />
            </Datagrid>
            <br />
            <br />
            <br />
            <br />
        </List>
    );
};
