import { List, Datagrid, EditButton, DeleteButton, TextField } from "react-admin";
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
        >
            <Datagrid
                bulkActionButtons={false}
                rowClick={is500 ? "edit" : false}
            >
                <TextField source="name" />
                <ModalImage source="image" />
                {/* <TextField source="bluer" /> */}
                {!is500 ? <EditButton /> : null}
                <DeleteButton mutationMode="pessimistic" />
            </Datagrid>
        </List>
    );
};
