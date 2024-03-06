import {
    Edit,
    SimpleForm,
    TextInput,
    DeleteButton,
    useGetList,
    useGetRecordId,
    useList,
    FunctionField,
    Labeled,
} from "react-admin";
import { useEffect, useState } from "react";
import CustomSaveEdit from "../../shared/CustomSaveEdit";
import { textLengthExcess } from "../../modules/validators";

type TUser = {
    id: number;
    fullName: string;
    email: string;
    role: string;
};

export const UsersEdit = () => {
    const recordId = useGetRecordId();
    const { data, isLoading } = useGetList("auth");
    const [user, setUser] = useState<TUser | null>(null);
    const listContext = useList({ data, isLoading, filter: { id: recordId } });

    useEffect(() => {
        if (listContext.data) {
            setUser(listContext.data[0] && listContext.data[0]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => {
            setUser(null);
        };
    }, [listContext, user]);

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
        errors.password = "Чтобы изменить данные нужно ввести новый пароль";
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
        <Edit
            title="Authorization → изменить"
            redirect="list"
        >
            <SimpleForm
                toolbar={<CustomSaveEdit resource="auth" />}
                defaultValues={{
                    firstName: user?.fullName.split(" ")[0],
                    lastName: user?.fullName.split(" ")[1],
                }}
                validate={validate}  criteriaMode="all"  shouldFocusError
            >
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
                    label="Пароль"
                    type="password"
                    required
                    
                />
                <Labeled label="Тип">
                    <FunctionField
                        render={(record: { role: string }) => `${record.role === "ADMIN" ? "Владелец" : "Пользотель"}`}
                        padding="3px"
                        borderRadius={50}
                    />
                </Labeled>

                <DeleteButton
                    disabled={user?.role !== "ADMIN" ? false : true}
                    mutationMode="pessimistic"
                    label="Удалить пользователя"
                />
            </SimpleForm>
        </Edit>
    );
};
