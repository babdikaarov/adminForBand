import { List, Datagrid, TextField, EditButton, DeleteButton } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";

export const TestimonaialsList = () => {
    return (
        <List
            title="Cool Studio → Отзывы учеников"
            pagination={false}
            exporter={false}
            hasCreate={true}
        >
            <Datagrid bulkActionButtons={false}>
                <ModalImage source="image" />
                <TextField source="name" />
                <TextField source="reviews" />
                <EditButton />
                <DeleteButton mutationMode="pessimistic" />
            </Datagrid>
        </List>
    );
};
