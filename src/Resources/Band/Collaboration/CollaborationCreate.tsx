import { Create, ImageField, ImageInput, SimpleForm, TextInput } from "react-admin";
import CustomSaveCreate from "../../../shared/CustomSaveCreate";

export const CollaborationCreate = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const validate = (values: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const errors: any = {};
        if (!values.newImage) {
            errors.newImage = "Забыли фотографию";
        }
        if (!values.name) {
            errors.name = "Забыли Имя";
        }
        return errors;
    };
    // validate={validate}  criteriaMode="all"  shouldFocusError
    return (
        <Create
            title="Cool Band → Коллаборация → добавить"
            redirect="edit"
        >
            <SimpleForm
                toolbar={<CustomSaveCreate />}
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
                    sx={{ width: "100%", maxWidth: "250px" }}
                />
            </SimpleForm>
        </Create>
    );
};
