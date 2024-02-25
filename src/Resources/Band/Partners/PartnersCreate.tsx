import { Create, ImageField, ImageInput, SimpleForm, TextInput } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";

export const PartnersCreate = () => {
    return (
        <Create
            title="Coll Band → Клиенты → добавить"
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
                    source="url"
                    label="Наименование"
                />
            </SimpleForm>
        </Create>
    );
};
