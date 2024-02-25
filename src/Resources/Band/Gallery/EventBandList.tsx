import { List, Datagrid, EditButton, TextField, CreateButton, Labeled, TopToolbar } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";
import { useMediaQuery } from "@mui/material";

export const EventBandList = () => {
    const is500 = useMediaQuery("(max-width:500px)");

    return (
        <List
            title="Coll Band → Галерея"
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
                        to="event_band"
                    />
                </Labeled>
                <TextField
                    source="date"
                    label="Дата"
                />
                <TextField
                    source="name"
                    label="Мероприятие"
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
