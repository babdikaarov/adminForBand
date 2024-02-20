import { List, Datagrid, TextField, EditButton } from "react-admin";
import { ClickVideo } from "../../../shared/ClickVideo";

export const HeroList = () => {
    return (
        <List
            title="Cool Studio → Баннер"
            pagination={false}
            exporter={false}
            hasCreate={false}
        >
            <Datagrid bulkActionButtons={false}>
                <TextField
                    source="title"
                    title="name"
                />
                <TextField
                    source="text"
                    title="name"
                />
                <ClickVideo
                    source="video"
                    label="Видео"
                />
                <EditButton />
            </Datagrid>
        </List>
    );
};
