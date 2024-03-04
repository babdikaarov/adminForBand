import { ImageField, ImageInput, TextInput } from "react-admin";
import { Create, SimpleForm } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveCreate";


export const CoursesCreate = () => {

           // eslint-disable-next-line @typescript-eslint/no-explicit-any
           const validate = (values: any) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const errors: any = {};
            if (!values.newImage) {
                errors.newImage = 'Забыли фотографию';
            }
              if (!values.name){
                errors.name = "Забыли Напрваление"
            }
            return errors
        };
        // validate={validate}  criteriaMode="all"  shouldFocusError
    return (
        <Create
            title="Cool Studio → Направления → добавить"
            redirect="list"
        >
            <SimpleForm toolbar={<CustomSaveToolBar />}
        validate={validate}  criteriaMode="all"  shouldFocusError
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
                        title="новое лого"
                    />
                </ImageInput>
                <TextInput
                    source="name"
                    label="Напрваление"
                />
            </SimpleForm>
        </Create>
    );
};
