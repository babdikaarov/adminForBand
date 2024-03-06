import { ImageField, ImageInput } from "react-admin";
import { Edit, SimpleForm, TextInput } from "react-admin";
import CustomSaveEdit from "../../../shared/CustomSaveEdit";
import { textLengthExcess } from "../../../modules/validators";
import { TextLimit } from "../../../shared/TextLimit";

export const TestimonaialsEdit = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const validate = (values: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const errors: any = {};

        if (!values.name) {
            errors.name = "Забыли Напрваление";
        }
        if (values.name) {
            if(textLengthExcess(23, values.name)){
                errors.name = "Неболее 23 символов или проверьте есть ли пробел в конце";
            }
            if(values.name.trim().split(" ").length >= 2){
                errors.name = "необходимо только одно слово"
            }
        }


        if (!values.reviews) {
            errors.reviews = "Забыли Позицию";
        }

        return errors;
    };
    // validate={validate}  criteriaMode="all"  shouldFocusError
    return (
        <Edit
            title="Cool Studio → Отзывы учеников → изменить"
            redirect="list"
        >
            <SimpleForm
                toolbar={<CustomSaveEdit resource="st_student_reviews" />}
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
                        title="Фото ученика"
                    />
                </ImageInput>
                <TextInput
                    source="name"
                    label="Имя"
                    sx={{ width: "100%", maxWidth: "250px" }}
                />
                <TextInput
                    source="reviews"
                    label="Отзыв"
                    multiline
                    sx={{ maxWidth: "500px", width: "100%" }}
                />
                <TextLimit
                    stylesClass="testimonialP"
                    source="reviews"
                    textOnServer="Отзыв"
                    description="Текст выходящий за рамки не будет показыватся на странице"
                />
            </SimpleForm>
        </Edit>
    );
};
