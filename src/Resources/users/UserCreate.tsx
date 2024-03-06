import { TextInput } from "react-admin";
import { Create, SimpleForm } from "react-admin";
import CustomSaveToolBar from "../../shared/CustomSaveCreate";
import { textLengthExcess } from "../../modules/validators";

export const UserCreate = () => {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const validate = (values: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const errors: any = {};

    if (!values.firstName) {
        errors.firstName = "Забыли Имя";
    }
    if (!values.lastName) {
        errors.lastName = "Забыли Фамилия";
    }
    if (!values.email) {
        errors.email = "Забыли email";
    }
    if (!values.password) {
        errors.password = "Забыли password";
    }
    if(values.password){

        if (!textLengthExcess(3, values.password)) {
            errors.password = "Неболее 4 символов или проверьте есть ли пробел в конце";
        }
    }
    return errors;
};
// validate={validate}  criteriaMode="all"  shouldFocusError


    return (
        <Create
            resource="auth/signUpForManager"
            title="Пользователь добавить"
            redirect="list"
        >
            <SimpleForm toolbar={<CustomSaveToolBar />}
            validate={validate}  criteriaMode="all"  shouldFocusError
            >
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
