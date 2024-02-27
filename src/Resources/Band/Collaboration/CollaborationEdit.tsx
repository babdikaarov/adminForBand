import { Edit, SimpleForm, TextInput, ImageInput, ImageField } from "react-admin";
import CustomSaveEdit from "../../../shared/CustomSaveEdit";

export const CollaborationEdit = () => {
    return (
        <Edit
            title="Cool Band → Коллаборация → изменить"
            redirect="list"
        >
            <SimpleForm toolbar={<CustomSaveEdit resource="collaborations_band" />}>
                <ImageInput
                    source="newImage"
                    multiple={false}
                    accept="image/*"
                    label="Новое изображение"
                    placeholder={<p>Перетащите изображение для загрузки или щелкните, чтобы выбрать его.</p>}
                >
                    <ImageField
                        source="src"
                        title="Аватар"
                    />
                </ImageInput>
                <TextInput
                    source="name"
                    label="Имя"
                />
            </SimpleForm>
        </Edit>
    );
};
