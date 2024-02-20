import { TextInput } from "react-admin";
import { Create, SimpleForm } from "react-admin";
import CustomSaveToolBar from "../../shared/CustomSaveToolBar";

export const UserCreate = () => {
    return (
        <Create
            resource="auth/signUp"
            title="User создать"
            redirect="list"
        >
            <SimpleForm toolbar={<CustomSaveToolBar />}>
                <TextInput source="firstName" />
                <TextInput source="lastName" />
                <TextInput source="email" />
                <TextInput source="password" />
            </SimpleForm>
        </Create>
    );
};
