import { Edit, FieldTitle, FileField, FileInput, ImageField, ImageInput, SimpleForm, TextInput } from "react-admin";
import CustomSelectInput from "../../../shared/CustomSelectInput";
import CustomSaveEdit from "../../../shared/CustomSaveEdit";
import { textLengthExcess } from "../../../modules/validators";

export const TeamEdit = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const validate = (values: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const errors: any = {};

        if (!values.instrument) {
            errors.instrument = "Забыли Роль";
        }
        if (!values.name) {
            errors.name = "Забыли Имя";
        }
        if (values.instrument && textLengthExcess(20, values.instrument)) {
            errors.instrument = "Неболее 20 символов или проверьте есть ли пробел в конце";
        }
        if (values.name && textLengthExcess(13, values.name)) {
            errors.name = "Неболее 13 символов или проверьте есть ли пробел в конце";
        }
        return errors;
    };

    return (
        <Edit title="Cool Band → Наша команда → изменить карточку">
            <SimpleForm
                toolbar={<CustomSaveEdit resource="team_band" />}
                validate={validate}
            >
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
                    sx={{ width: "100%", maxWidth: "250px" }}
                />
                <TextInput
                    source="name"
                    label="Имя"
                    sx={{ width: "100%", maxWidth: "250px" }}
                />
            </SimpleForm>
        </Edit>
    );
};
