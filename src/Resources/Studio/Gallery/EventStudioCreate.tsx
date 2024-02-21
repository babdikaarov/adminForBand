import { Create, DateInput, SimpleForm, TextInput } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";
export const EventStudioCreate = () => {
    return (
        <Create
            title="Coll Studio → Галерея → создать"
            redirect="list"
        >
            <SimpleForm toolbar={<CustomSaveToolBar />}>
                <TextInput source="name" />
                <TextInput source="location" />
                <DateInput source="date" />
            </SimpleForm>
        </Create>
    );
};
