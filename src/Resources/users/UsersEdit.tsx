import { Edit, SimpleForm, TextInput, DeleteButton, useGetList, useGetRecordId, useList } from "react-admin";
import CustomSaveToolBar from "../../shared/CustomSaveToolBar";
import { useEffect, useState } from "react";

export const UsersEdit = () => {
    const recordId = useGetRecordId();
    const { data, isLoading } = useGetList("auth");
    const [role, setRole] = useState("");
    const listContext = useList({ data, isLoading, filter: { id: recordId } });
    // const role = listContext.data[0] && listContext.data[0].role;
    // console.log(listContext)

    useEffect(()=>{
        if(listContext.data[0].role){
            setRole(listContext.data[0].role)
        }
    },[listContext])
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
                <DeleteButton />
                <DeleteButton disabled={role === "ADMIN" ? true : false} />
            </SimpleForm>
        </Edit>
    );
};
