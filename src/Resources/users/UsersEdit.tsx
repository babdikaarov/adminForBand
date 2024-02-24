import { Edit, SimpleForm, TextInput, DeleteButton, useGetList, useGetRecordId, useList } from "react-admin";
import CustomSaveToolBar from "../../shared/CustomSaveToolBar";

export const UsersEdit = () => {
    const recordId = useGetRecordId();
    const { data, isLoading } = useGetList("auth");
    const listContext = useList({ data, isLoading, filter: { id: recordId } });
    const role = listContext.data && listContext.data[0].role;

    return (
        <Edit
            title="Authorization → изменить"
            redirect="list"
        >
            <SimpleForm toolbar={<CustomSaveToolBar />}>
                <TextInput
                    source="fullName"
                    disabled
                />
                <TextInput source="email" />
                <TextInput source="password" />
                <TextInput
                    disabled
                    source="role"
                />
                <DeleteButton disabled={role === "ADMIN" ? true : false} />
            </SimpleForm>
        </Edit>
    );
};
