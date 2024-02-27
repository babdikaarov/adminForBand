import { List, Datagrid, EditButton, TextField, Labeled, CreateButton, TopToolbar } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";
import { useMediaQuery } from "@mui/material";

export const EventStudioList = () => {
    const is500 = useMediaQuery("(max-width:500px)");

    return (
        <List
            title="Cool Studio → Концерты"
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
                rowClick={!is500 ? "" : "edit"}
            >
                {!is500 ? <TextField source="id" /> : null}
                <Labeled label="Изображение">
                    <ModalImage
                        source="coverImage"
                        label={false}
                        to="event_studio"
                    />
                </Labeled>
                <TextField
                    source="date"
                    label="Дата"
                />
                <TextField
                    source="name"
                    label="Концерт"
                />
                <TextField
                    source="location"
                    label="Локация"
                />
                {!is500 ? <EditButton label="Изменить" /> : null}
            </Datagrid>
            <br />
            <br />
            <br />
            <br />
        </List>
    );
};
