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
                    label="Постер"
                    multiple={false}
                    accept="image/*"
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
