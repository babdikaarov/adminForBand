import { List, Datagrid, EditButton, DeleteButton, UrlField, CreateButton, TopToolbar } from "react-admin";
import { Create, Edit, SimpleForm, TextInput } from "react-admin";
import CustomSaveCreate from "../../../shared/CustomSaveCreate";
import CustomSaveEdit from "../../../shared/CustomSaveEdit";

export const StudentsSuccessList = () => {
    return (
        <List
            title="Cool Studio → История успехов студентов"
            pagination={false}
            exporter={false}
            hasCreate={true}
            actions={
                <TopToolbar>
                    <CreateButton label="Добавить" />
                </TopToolbar>
            }
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
                    confirmTitle="Удаление"
                    confirmContent="Подвердите что бы удалить"
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const validate = (values: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const errors: any = {};
        if (!values.url) {
            errors.url = "Забыли ссылку на youtube";
        }

        return errors;
    };
    // validate={validate}  criteriaMode="all"  shouldFocusError
    return (
        <Create
            title="Cool Studio → История успехов студентов → добавить"
            redirect="list"
        >
            <SimpleForm
                toolbar={<CustomSaveCreate />}
                validate={validate}
                criteriaMode="all"
                shouldFocusError
            >
                <br />
                <br />
                <TextInput
                    source="url"
                    label="Ссылка на youtube видео"
                    multiline
                    fullWidth
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
            <SimpleForm toolbar={<CustomSaveEdit resource="student_success_studio" />}>
                <br />
                <br />
                <TextInput
                    source="url"
                    label="Ссылка на youtube видео"
                    multiline
                    fullWidth
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
