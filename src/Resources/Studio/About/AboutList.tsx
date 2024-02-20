import { List, Datagrid, EditButton, UrlField } from "react-admin";

export const AboutList = () => {
    return (
        <List
            title="Cool Studio → О нас"
            pagination={false}
            exporter={false}
            hasCreate={false}
        >
            <Datagrid bulkActionButtons={false}>
                <UrlField
                    source="youtubeUrl"
                    label="Youtube ссылка на видео"
                    target="blank"
                />
                <EditButton />
            </Datagrid>
        </List>
    );
};
