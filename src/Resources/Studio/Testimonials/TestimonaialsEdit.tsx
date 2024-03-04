import { ImageField, ImageInput } from "react-admin";
import { Edit, SimpleForm, TextInput } from "react-admin";
import CustomSaveEdit from "../../../shared/CustomSaveEdit";

export const TestimonaialsEdit = () => {
    return (
        <Edit
            title="Cool Studio → Отзывы учеников → изменить"
            redirect="list"
        >
            <SimpleForm toolbar={<CustomSaveEdit resource="st_student_reviews" />}>
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
                />
                <TextInput
                    source="reviews"
                    label="Отзыв"
                    multiline
                    sx={{ maxWidth: "500px", width: "100%" }}
                />
            </SimpleForm>
        </Edit>
    );
};
