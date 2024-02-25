import { Edit, ImageField, ImageInput, SimpleForm, TextInput } from "react-admin";
import CustomSaveEdit from "../../../shared/CustomSaveEdit";

export const TeacherEdit = () => {
    return (
        <Edit
            title="Cool Studio → Преподаватели → изменить"
            redirect="list"
        >
            <SimpleForm toolbar={<CustomSaveEdit resource="st_teachers" />}>
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
        </Edit>
    );
};
