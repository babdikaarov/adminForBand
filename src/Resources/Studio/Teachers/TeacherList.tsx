import { List, Datagrid, TextField, EditButton, DeleteButton, SimpleShowLayout, RichTextField } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";
import { useMediaQuery } from "@mui/material";

export const TeacherList = () => {
    const is420 = useMediaQuery("(max-width:420px)");
    const is550 = useMediaQuery("(max-width:550px)");
    const is700 = useMediaQuery("(max-width:700px)");
    const is950 = useMediaQuery("(max-width:950px)");

    const DescriptionShow = () => (
        <SimpleShowLayout>
            {is420 ? <ModalImage source="image" /> : null}
            <RichTextField source="description" />
            {is950 ? <TextField source="urlInstagram" /> : null}
            {is550 ? <TextField source="position" /> : null}
        </SimpleShowLayout>
    );

    return (
        <List
            title="Cool Studio → Преподаватели"
            pagination={false}
            exporter={false}
            hasCreate={true}
        >
            <Datagrid
                bulkActionButtons={false}
                expand={<DescriptionShow />}
                title="click to expand description!"
                expandSingle
                rowClick="expand"
            >
                <TextField source="name" />
                {!is420 ? <ModalImage source="image" /> : null}
                {!is950 ? <TextField source="urlInstagram" /> : null}
                {!is550 ? <TextField source="position" /> : null}
                {/* <EditButton label=""/> */}
                <EditButton label={is700 ? " " : "Изменить"} />
                <DeleteButton
                    mutationMode="pessimistic"
                    label={is700 ? "" : "Удалить"}
                />
                {/* <DeleteButton mutationMode="pessimistic" /> */}
            </Datagrid>
        </List>
    );
};
