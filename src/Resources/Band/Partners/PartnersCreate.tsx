import { Create, ImageField, ImageInput, SimpleForm, TextInput } from "react-admin";
import CustomSaveCreate from "../../../shared/CustomSaveCreate";

export const PartnersCreate = () => {
    return (
        <Create
            title="Coll Band → Клиенты → добавить"
            redirect="list"
        >
            <SimpleForm toolbar={<CustomSaveCreate />}>
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
