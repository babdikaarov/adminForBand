import { Create, ImageField, ImageInput, SimpleForm, TextInput } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveCreate";

export const TeacherCreate = () => {
    return (
        <Create
            title="Cool Studio → Преподаватели → добавить"
            redirect="list"
        >
            <SimpleForm toolbar={<CustomSaveToolBar />}>
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
                />
            </SimpleForm>
        </Create>
    );
};
