import { List, Datagrid, EditButton, TextField, CreateButton, Labeled } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";
import { useMediaQuery } from "@mui/material";

export const EventBandList = () => {
    const is500 = useMediaQuery("(max-width:500px)");

    return (
        <List
            title="Coll Band → Gallery"
            pagination={false}
            exporter={false}
            hasCreate={true}
            actions={<CreateButton label="Добавить" />}
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
                {/* <TextField
                    source="bluer"
                    label="bluer"
                /> */}
                {!is500 ? <EditButton label="Изменить" /> : null}
            </Datagrid>
            <br />
            <br />
            <br />
            <br />
        </List>
    );
};
