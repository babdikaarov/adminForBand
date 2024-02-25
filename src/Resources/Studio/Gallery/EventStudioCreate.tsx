import { Create, DateInput, SimpleForm, TextInput } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";
export const EventStudioCreate = () => {
    return (
        <Create
            title="Coll Studio → Концерты → добавить"
            redirect="list"
        >
            <SimpleForm toolbar={<CustomSaveToolBar />}>
                <TextInput
                    source="name"
                    label="Наименование"
                />
                <TextInput
                    source="location"
                    label="Локация"
                />
                <DateInput
                    source="date"
                    label="Дата"
                />
            </SimpleForm>
        </Create>
    );
};
