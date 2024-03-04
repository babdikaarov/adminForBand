import { Create, DateInput, SimpleForm, TextInput } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveCreate";

export const EventBandCreate = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const validate = (values: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const errors: any = {};
        if (!values.date) {
            errors.date = "Забыли Дата";
        }
        if (!values.name) {
            errors.name = "Забыли Наименование";
        }
        return errors;
    };
    // validate={validate}  criteriaMode="all"  shouldFocusError
    return (
        <Create
            title="Cool Band → Галерея → добавить"
            redirect="list"
        >
            <SimpleForm
                toolbar={<CustomSaveToolBar />}
                validate={validate}
                criteriaMode="all"
                shouldFocusError
            >
                <TextInput
                    source="name"
                    label="Наименование"
                />
                <DateInput
                    source="date"
                    label="Дата"
                />
            </SimpleForm>
        </Create>
    );
};
