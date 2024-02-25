import { TextInput } from "react-admin";
import { Create, SimpleForm } from "react-admin";
import CustomSaveToolBar from "../../shared/CustomSaveCreate";

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
                    required
                />
                <TextInput
                    source="lastName"
                    label="Фамилия"
                    required
                />
                <TextInput
                    source="email"
                    label="Почта"
                    required
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
