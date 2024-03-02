import { ImageField, ImageInput } from "react-admin";
import { Create, SimpleForm, TextInput } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveCreate";

export const TestimonaialsCreate = () => {
    return (
        <Create
            title="Cool Studio → Отзывы учеников → добавить"
            redirect="list"
        >
            <SimpleForm toolbar={<CustomSaveToolBar />}>
                <ImageInput
                    source="newImage"
                    multiple={false}
                    accept="image/*"
                    label="Фото ученика"
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
                    sx={{maxWidth: "500px", width: "100%"}}
                />
            </SimpleForm>
        </Create>
    );
};
