import { Edit, SimpleForm, ImageInput, ImageField, SaveButton } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";

export const AboutList = () => {
    return (
        <Edit title="Coll Band → О нас" id={1}>
        <SimpleForm 
           toolbar={<SaveButton label="Сохранить изменения"/>}
        >
            <ImageInput
                source="newImage"
                label="Постер"
                multiple={false}
                accept="image/*"
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
