import { List, Datagrid, EditButton, TextField, DeleteButton } from "react-admin";
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
        >
            <Datagrid
                bulkActionButtons={false}
                rowClick={is500 ? "edit" : false}
            >
                {!is500 ? <TextField source="id" /> : null}
                <ModalImage source="coverImage" />
                <TextField source="date" />
                <TextField source="name" />
                {!is500 ? <EditButton /> : null}
                {/* if photo exist do notify user it cant be deleted */}
                <DeleteButton mutationMode="pessimistic" />
            </Datagrid>
        </List>
    );
};
