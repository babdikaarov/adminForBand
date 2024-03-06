import { Create, DateInput, SimpleForm, TextInput } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveCreate";
import { textLengthExcess } from "../../../modules/validators";

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
        if (textLengthExcess(30, values.name)) {
            errors.name = "Неболее 30 символов или проверьте есть ли пробел в конце";
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
