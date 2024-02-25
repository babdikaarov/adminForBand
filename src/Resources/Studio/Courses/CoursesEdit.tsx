import { ImageField, ImageInput, TextInput } from "react-admin";
import { Edit, SimpleForm } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";

export const CoursesEdit = () => {
    return (
        <Edit
            title="Cool Studio → Направления → изменить"
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
