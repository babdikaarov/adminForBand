import { List, Datagrid, EditButton, DeleteButton, UrlField, CreateButton } from "react-admin";
import { Create, Edit, SimpleForm, TextInput } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";

export const StudentsSuccessList = () => {
    return (
        <List
            title="Cool Studio → История успехов студентов"
            pagination={false}
            exporter={false}
            hasCreate={true}
            actions={<CreateButton label="Добавить" />}
        >
            <Datagrid
                bulkActionButtons={false}
                rowClick="edit"
            >
                <UrlField
                    target="_blank"
                    source="url"
                    label="Ссылка на youtube видео"
                />
                <EditButton label="Изменить" />
                <DeleteButton
                    label="Удалить"
                    mutationMode="pessimistic"
                />
            </Datagrid>
            <br />
            <br />
            <br />
            <br />
        </List>
    );
};

export const StudentsSuccessCreate = () => {
    return (
        <Create
            title="Cool Studio → История успехов студентов → создать"
            redirect="list"
        >
            <SimpleForm toolbar={<CustomSaveToolBar />}>
                <br />
                <br />
                <TextInput
                    source="url"
                    label="Ссылка на youtube видео"
                ></TextInput>
            </SimpleForm>
        </Create>
    );
};

export const StudentsSuccessEdit = () => {
    return (
        <Edit
            title="Cool Studio → История успехов студентов → изменить"
            redirect="list"
        >
            <SimpleForm toolbar={<CustomSaveToolBar />}>
                <br />
                <br />
                <TextInput
                    source="url"
                    label="Ссылка на youtube видео"
                ></TextInput>
            </SimpleForm>
        </Edit>
    );
};

export default {
    resource: "student_success_studio",
    list: StudentsSuccessList,
    create: StudentsSuccessCreate,
    edit: StudentsSuccessEdit,
};
