import { List, Datagrid, TextField, EditButton, DeleteButton, ChipField } from "react-admin";
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
            filter={{ id: 1 }}
            pagination={false}
            exporter={false}
            hasCreate={true}
        >
            <Datagrid
                bulkActionButtons={false}
                rowClick={is450 ? "edit" : false}
            >
                <TextField
                    source="name"
                    label="Имя"
                />
                <ModalImage
                    source="image"
                    label="photo"
                />

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
        </List>
    );
};
