import { Edit, ImageField, ImageInput, SimpleForm, TextInput } from "react-admin";
import CustomSaveEdit from "../../../shared/CustomSaveEdit";

export const PartnersEdit = () => {
    return (
        <Edit
            title="Cool Band → Клиенты → изменить"
            redirect="list"
        >
            <SimpleForm toolbar={<CustomSaveEdit resource="partners_band" />}>
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
                    fullWidth
                    multiline
                />
            </SimpleForm>
        </Edit>
    );
};
