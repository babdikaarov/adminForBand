import { TextInput } from "react-admin";
import { Create, SimpleForm } from "react-admin";
import CustomSaveToolBar from "../../shared/CustomSaveToolBar";

export const UserCreate = () => {
    return (
        <Create
            resource="auth/signUpForManager"
            title="Пользователь добавить"
            redirect="list"
        >
            <SimpleForm toolbar={<CustomSaveToolBar />}>
                <TextInput
                    source="firstName"
                    label="Имя"
                />
                <TextInput
                    source="lastName"
                    label="Фамилия"
                />
                <TextInput
                    source="email"
                    label="Почта"
                />
                <TextInput
                    source="password"
                    required
                    label="Пароль"
                />
            </SimpleForm>
        </Create>
    );
};
