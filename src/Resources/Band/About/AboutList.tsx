import { Edit, SimpleForm, ImageInput, ImageField, SaveButton } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";

export const AboutList = () => {
    return (
        <Edit
            title="Cool Band → О нас"
            id={1}
        >
            <SimpleForm toolbar={<SaveButton label="Сохранить изменения" />}>
                <ImageInput
                    source="newImage"
                    label="Новое изображение"
                    multiple={false}
                    accept="image/*"
                    placeholder={<p>Перетащите изображение для загрузки или щелкните, чтобы выбрать его.</p>}
                >
                    <ImageField
                        source="src"
                        title=""
                    />
                </ImageInput>
                <h3> На сервере:</h3>
                <ModalImage
                    source="image"
                    title="На сервере"
                />
            </SimpleForm>
        </Edit>
    );
};
