import { Create, DateInput, SimpleForm, TextInput } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveCreate";


export const EventStudioCreate = () => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const validate = (values: any) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const errors: any = {};
            if (!values.date) {
                errors.date = 'Забыли Дата';
            }
              if (!values.name){
                errors.name = "Забыли Наименование"
            }
              if (!values.location){
                errors.location = "Забыли Локацию"
            }
            return errors
        };
        // validate={validate}  criteriaMode="all"  shouldFocusError
    return (
        <Create
            title="Cool Studio → Концерты → добавить"
            redirect="list"
        >
            <SimpleForm toolbar={<CustomSaveToolBar />}
        validate={validate}  criteriaMode="all"  shouldFocusError
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
