import { Create, DateInput, SimpleForm, TextInput } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveCreate";
import { textLengthExcess } from "../../../modules/validators";

export const EventStudioCreate = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const validate = (values: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const errors: any = {};
        if (!values.name) {
            errors.name = "Забыли Наименование";
        }
        if (textLengthExcess(28, values.location)) {
            errors.location = "Неболее 28 символов или проверьте есть ли пробел в конце";
        }
        if (values.name) {
            values.name.split(" ").forEach((item: string) => {
                if (item.length > 22) {
                    errors.name = "Одно слово неболее 22 символов или проверьте есть ли пробел в конце";
                }
            });
        }
        if (values.name.split(" ")) {
            if (values.name.trim().split(" ").length > 2) {
                errors.name = "Неболее 2-х слов";
            }
        }

        return errors;
    };
    // validate={validate}  criteriaMode="all"  shouldFocusError
    return (
        <Create
            title="Cool Studio → Концерты → добавить"
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
