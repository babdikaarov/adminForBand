import { Create, ImageField, ImageInput, SimpleForm, TextInput } from "react-admin";
import CustomSaveCreate from "../../../shared/CustomSaveCreate";

export const PartnersCreate = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const validate = (values: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const errors: any = {};
        if (!values.newImage) {
            errors.newImage = "Забыли фотографию";
        }
        if (!values.url) {
            errors.url = "Забыли Наименование";
        }
        return errors;
    };
    // validate={validate}  criteriaMode="all"  shouldFocusError
    return (
        <Create
            title="Cool Band → Клиенты → добавить"
            redirect="list"
        >
            <SimpleForm
                toolbar={<CustomSaveCreate />}
                validate={validate}
                criteriaMode="all"
                shouldFocusError
            >
                <ImageInput
                    source="newImage"
                    multiple={false}
                    accept="image/*"
                    label="Новое изображение"
                    placeholder={<p>Перетащите изображение для загрузки или щелкните, чтобы выбрать его.</p>}
                >
                    <ImageField
                        source="src"
                        title="новое лого"
                    />
                </ImageInput>
                <TextInput
                    source="url"
                    label="Наименование"
                />
            </SimpleForm>
        </Create>
    );
};
