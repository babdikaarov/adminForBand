import { List, Datagrid, TextField, EditButton, DeleteButton, SimpleShowLayout, RichTextField } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";
import { useMediaQuery } from "@mui/material";

export const TestimonaialsList = () => {
    const is700 = useMediaQuery("(max-width:700px)");

    const DescriptionShow = () => (
        <SimpleShowLayout>
            <RichTextField source="reviews" />
        </SimpleShowLayout>
    );
    return (
        <List
            title="Cool Studio → Отзывы учеников"
            pagination={false}
            exporter={false}
            hasCreate={true}
        >
            {!is700 ? (
                <Datagrid bulkActionButtons={false}>
                    <ModalImage source="image" />
                    <TextField source="name" />
                    <TextField source="reviews" />
                    <EditButton />
                    <DeleteButton mutationMode="pessimistic" />
                </Datagrid>
            ) : (
                <Datagrid
                    bulkActionButtons={false}
                    expand={<DescriptionShow />}
                    title="click to expand description!"
                    expandSingle
                    rowClick="expand"
                >
                    <ModalImage source="image" />
                    <TextField source="name" />
                    <EditButton />
                    <DeleteButton mutationMode="pessimistic" />
                </Datagrid>
            )}
        </List>
    );
};
