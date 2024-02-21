import { List, Datagrid, EditButton, TextField, DeleteButton } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";

export const EventStudioList = () => {
    /* 
      {
    "id": 0,
    "date": "2024-02-21",
    "name": "string",
    "coverImage": "string",
    "location": "string"
  }
    */
    return (
        <List
            title="Coll Studio → Gallery"
            pagination={false}
            exporter={false}
            hasCreate={true}
        >
            <Datagrid bulkActionButtons={false}>
                <TextField source="id" />
                <ModalImage source="coverImage" />
                <TextField source="date" />
                <TextField source="name" />
                <TextField source="location" />
                <EditButton />
                {/* if photo exist do notify user it cant be deleted */}
                <DeleteButton mutationMode="pessimistic" />
            </Datagrid>
        </List>
    );
};
