import { ImageField, ImageInput } from "react-admin";
import { Edit, SimpleForm, TextInput } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";

export const TestimonaialsEdit = () => {
    return (
        <Edit
            title="Cool Studio → Отзывы учеников → изменить"
            redirect="list"
        >
            <SimpleForm toolbar={<CustomSaveToolBar />}>
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
                />
            </SimpleForm>
        </Edit>
    );
};
