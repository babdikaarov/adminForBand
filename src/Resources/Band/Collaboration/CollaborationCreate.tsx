import { Create, ImageField, ImageInput, SimpleForm, TextInput } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";
export const CollaborationCreate = () => {
    return (
        <Create
            title="Coll Band → Коллаборация → добавить"
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
                        title="Аватар"
                    />
                </ImageInput>
                <TextInput
                    source="name"
                    label="Имя"
                />
            </SimpleForm>
        </Create>
    );
};
