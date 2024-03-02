import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
    SimpleShowLayout,
    RichTextField,
    CreateButton,
    Labeled,
    TopToolbar,
} from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";
import { useMediaQuery } from "@mui/material";

export const TestimonaialsList = () => {
    const is700 = useMediaQuery("(max-width:700px)");

    const DescriptionShow = () => (
        <SimpleShowLayout>
            <RichTextField source="reviews" label="Отзыв" />
        </SimpleShowLayout>
    );
    return (
        <List
            title="Cool Studio → Отзывы учеников"
            pagination={false}
            exporter={false}
            hasCreate={true}
            actions={
                <TopToolbar>
                    <CreateButton label="Добавить" />
                </TopToolbar>
            }
        >
            {!is700 ? (
                <Datagrid
                    bulkActionButtons={false}
                    // rowClick={is700 ? "" : "edit"}
                >
                    <Labeled label="Изображение">
                        <ModalImage
                            source="image"
                            label={false}
                        />
                    </Labeled>
                    <TextField
                        source="name"
                        label="Имя"
                    />
                    <TextField
                        source="reviews"
                        label="Отзыв"
                    />
                    <EditButton label="Изменить" />
                    <DeleteButton
                        label="Удалить"
                        mutationMode="pessimistic"
                    />
                </Datagrid>
            ) : (
                <Datagrid
                    bulkActionButtons={false}
                    expand={<DescriptionShow />}
                    title="click to expand description!"
                    expandSingle
                    rowClick="expand"
                >
                    <Labeled label="Изображение">
                        <ModalImage
                            source="image"
                            label={false}
                        />
                    </Labeled>
                    <TextField
                        source="name"
                        label="Имя"
                    />
                    <EditButton label="Изменить" />
                    <DeleteButton
                        label="Удалить"
                        mutationMode="pessimistic"
                    />
                </Datagrid>
            )}
            <br />
            <br />
            <br />
            <br />
            <br />
        </List>
    );
};
