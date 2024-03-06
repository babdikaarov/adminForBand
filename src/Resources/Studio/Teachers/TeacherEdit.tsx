import { Edit, ImageField, ImageInput, SimpleForm, TextInput } from "react-admin";
import CustomSaveEdit from "../../../shared/CustomSaveEdit";
import { textLengthExcess } from "../../../modules/validators";

export const TeacherEdit = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const validate = (values: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const errors: any = {};

        if (!values.name) {
            errors.name = "Забыли Напрваление";
        }
        // if (values.name && textLengthExcess(18, values.name)) {
        //     errors.name = "Неболее 18 символов";
        // }
        if (values.name) {
            values.name.split(" ").forEach((item: string) => {
                if (item.length > 17) {
                    errors.name = "Одно слово неболее 17 символов";
                }
            });
        }

        if (values.name.split(" ")) {
            if (values.name.trim().split(" ").length > 2) {
                errors.name = "Неболее 2-х слов";
            }
        }
        if (values.position && textLengthExcess(22, values.position)) {
            errors.position = "Неболее 22 символов или проверьте есть ли пробел в конце";
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
        <Edit
            title="Cool Studio → Преподаватели → изменить"
            redirect="list"
        >
            <SimpleForm
                toolbar={<CustomSaveEdit resource="st_teachers" />}
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
                        title=""
                    />
                </ImageInput>
                <TextInput
                    source="name"
                    label="Имя"
                    sx={{ width: "100%", maxWidth: "400px" }}
                />
                <TextInput
                    source="position"
                    label="Позиция"
                    sx={{ width: "100%", maxWidth: "400px" }}
                />
                <TextInput
                    source="urlInstagram"
                    label="Ссылка на instagram"
                    fullWidth
                />
                <TextInput
                    source="description"
                    label="Описание"

                    fullWidth
                    multiline
                />
            </SimpleForm>
        </Edit>
    );
};
