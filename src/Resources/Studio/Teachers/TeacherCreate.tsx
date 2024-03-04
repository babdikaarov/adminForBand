import { Create, ImageField, ImageInput, SimpleForm, TextInput } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveCreate";

export const TeacherCreate = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const validate = (values: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const errors: any = {};
        if (!values.newImage) {
            errors.newImage = "Забыли фотографию";
        }
        if (!values.name) {
            errors.name = "Забыли Напрваление";
        }
        if (!values.urlInstagram) {
            errors.urlInstagram = "Забыли ссылку на instagram";
        }
        if (!values.position) {
            errors.position = "Забыли Позицию";
        }
        if (!values.description) {
            errors.description = "Забыли Описание";
        }
        return errors;
    };
    // validate={validate}  criteriaMode="all"  shouldFocusError
    return (
        <Create
            title="Cool Studio → Преподаватели → добавить"
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
                    label="Имя"
                />
                <ImageInput
                    source="newImage"
                    multiple={false}
                    accept="image/*"
                    label="Новое изображение"
                    placeholder={<p>Перетащите изображение для загрузки или щелкните, чтобы выбрать его.</p>}
                >
                    <ImageField
                        source="src"
                        title=""
                    />
                </ImageInput>
                <TextInput
                    source="urlInstagram"
                    label="Ссылка на instagram"
                />
                <TextInput
                    source="position"
                    label="Позиция"
                />
                <TextInput
                    source="description"
                    label="Описание"
                    fullWidth
                    multiline
                />
            </SimpleForm>
        </Create>
    );
};
