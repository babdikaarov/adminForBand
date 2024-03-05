import { Edit, SimpleForm, ImageInput, ImageField } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";
import SaveEdit from "../../../shared/SaveEdit";

export const AboutList = () => {
    return (
        <Edit
            title="Cool Band → О нас"
            id={1}
        >
            <SimpleForm toolbar={<SaveEdit resource="about_us_band" />}>
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
