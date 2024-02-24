import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
    SimpleShowLayout,
    RichTextField,
    Labeled,
    CreateButton,
    UrlField,
} from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";
import { useMediaQuery } from "@mui/material";

export const TeacherList = () => {
    const is420 = useMediaQuery("(max-width:420px)");
    const is550 = useMediaQuery("(max-width:550px)");
    const is700 = useMediaQuery("(max-width:700px)");
    const is950 = useMediaQuery("(max-width:950px)");

    const DescriptionShow = () => (
        <SimpleShowLayout>
            {is420 ? (
                <Labeled label="Изображение">
                    <ModalImage
                        source="image"
                        label={false}
                    />
                </Labeled>
            ) : null}
            <RichTextField
                source="description"
                label="Описание"
            />
            {is950 ? (
                <UrlField
                    target="_blank"
                    source="urlInstagram"
                    label="Ссылка на instagram"
                />
            ) : null}
            {is550 ? (
                <TextField
                    source="position"
                    label="Позиция"
                />
            ) : null}
        </SimpleShowLayout>
    );

    return (
        <List
            title="Cool Studio → Преподаватели"
            pagination={false}
            exporter={false}
            hasCreate={true}
            actions={<CreateButton label="Добавить" />}
        >
            <Datagrid
                bulkActionButtons={false}
                expand={<DescriptionShow />}
                title="click to expand description!"
                expandSingle
                rowClick="expand"
            >
                <TextField
                    source="name"
                    label="Имя"
                />
                {!is420 ? (
                    <Labeled label="Изображение">
                        <ModalImage
                            source="image"
                            label={false}
                        />
                    </Labeled>
                ) : null}
                {!is950 ? (
                    <UrlField
                        target="_blank"
                        source="urlInstagram"
                        label="Ссылка на instagram"
                    />
                ) : null}
                {!is550 ? (
                    <TextField
                        source="position"
                        label="Позиция"
                    />
                ) : null}
                {/* <EditButton label=""/> */}
                <EditButton label={is700 ? " " : "Изменить"} />
                <DeleteButton
                    mutationMode="pessimistic"
                    label={is700 ? "" : "Удалить"}
                />
                {/* <DeleteButton mutationMode="pessimistic" /> */}
            </Datagrid>
            <br />
            <br />
            <br />
            <br />
        </List>
    );
};
