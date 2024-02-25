import { Edit, FieldTitle, FileField, FileInput, ImageField, ImageInput, SimpleForm, TextInput } from "react-admin";
import CustomSelectInput from "../../../shared/CustomSelectInput";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";
/*
 */
export const TeamEdit = () => {
    /*
     */
    return (
        <Edit title="Coll Band → Наша команда → изменить карточку">
            <SimpleForm toolbar={<CustomSaveToolBar />}>
                <FieldTitle label="Карточка спереди" />
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
                <CustomSelectInput />
                <FieldTitle label="Карточка сзади" />
                <FileInput
                    source="newVideo"
                    accept="video/*"
                    multiple={false}
                    label="Новое видео"
                    placeholder={<p>Перетащите изображение для загрузки или щелкните, чтобы выбрать его.</p>}
                >
                    <FileField
                        source="src"
                        title="title"
                        target="blank"
                    />
                </FileInput>
                <FieldTitle label="Детали картчочки" />
                <TextInput
                    source="instrument"
                    label="Роль"
                    defaultValue={""}
                />
                <TextInput
                    source="name"
                    label="Имя"
                />
            </SimpleForm>
        </Edit>
    );
};
