import { ImageField, ImageInput, TextInput } from "react-admin";
import { Edit, SimpleForm } from "react-admin";
import CustomSaveEdit from "../../../shared/CustomSaveEdit";
import { textLengthExcess } from "../../../modules/validators";

export const CoursesEdit = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const validate = (values: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const errors: any = {};

        if (!values.name) {
            errors.name = "Забыли Напрваление";
        }
        if (values.name && textLengthExcess(15, values.name)) {
            errors.name = "Неболее 15 символов или проверьте есть ли пробел в конце";
        }
        return errors;
    };
    // validate={validate}  criteriaMode="all"  shouldFocusError
    return (
        <Edit
            title="Cool Studio → Направления → изменить"
            redirect="list"
        >
            <SimpleForm
                toolbar={<CustomSaveEdit resource="direction" />}
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
                    source="name"
                    label="Напрваление"
                />
            </SimpleForm>
        </Edit>
    );
};
