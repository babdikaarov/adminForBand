import { List, Datagrid, EditButton, TextField, DeleteButton } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";

export const EventBandList = () => {
    return (
        <List
            title="Coll Band → Gallery"
            pagination={false}
            exporter={false}
            hasCreate={true}
        >
            <Datagrid bulkActionButtons={false}>
                <TextField source="id" />
                <ModalImage source="coverImage" />
                <TextField source="date" />
                <TextField source="name" />
                <EditButton />
                <DeleteButton mutationMode="pessimistic" />
            </Datagrid>
        </List>
    );
};
