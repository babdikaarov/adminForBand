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
import CustomSaveToolBar from "../../shared/CustomSaveToolBar";
import { useEffect, useState } from "react";

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

    return (
        <Edit
            title="Authorization → изменить"
            redirect="list"
        >
            <SimpleForm
                toolbar={<CustomSaveToolBar />}
                defaultValues={{
                    firstName: user?.fullName.split(" ")[0],
                    lastName: user?.fullName.split(" ")[1],
                }}
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
                    required
                    label="Пароль"
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
                />
            </SimpleForm>
        </Edit>
    );
};
