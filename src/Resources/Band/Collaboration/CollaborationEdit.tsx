import { Edit, SimpleForm, TextInput, ImageInput, ImageField } from "react-admin";
import CustomSaveEdit from "../../../shared/CustomSaveEdit";
import { TextLimit } from "../../../shared/TextLimit";

export const CollaborationEdit = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const validate = (values: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const errors: any = {};

        if (!values.name) {
            errors.name = "Забыли Имя";
        }

        return errors;
    };
    // validate={validate}  criteriaMode="all"  shouldFocusError
    return (
        <Edit
            title="Cool Band → Коллаборация → изменить"
            redirect="list"
        >
            <SimpleForm
                toolbar={
                    <CustomSaveEdit
                        resource="collaborations_band"
                        label="Сохранить и назад"
                        label2="Сохранить"
                    />
                }
                validate={validate}
                criteriaMode="all"
                shouldFocusError
            >
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
                    sx={{ width: "100%", maxWidth: "230px" }}
                    multiline
                />
                <TextLimit
                    stylesClass="collabP"
                    description="!не выходите за рамки нижнего блока будте осторожны!"
                    source="name"
                    textOnServer="Имя"
                />
            </SimpleForm>
        </Edit>
    );
};
