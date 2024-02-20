import { Create, DateInput, SimpleForm, TextInput } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";
export const EventBandCreate = () => {
    return (
        <Create
            title="Coll Band → Галерея → создать"
            redirect="list"
        >
            <SimpleForm toolbar={<CustomSaveToolBar />}>
                <TextInput source="name" />
                <DateInput source="date" />
            </SimpleForm>
        </Create>
    );
};
