import { ImageField, ImageInput } from "react-admin";
import { Create, SimpleForm, TextInput } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveCreate";


export const TestimonaialsCreate = () => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const validate = (values: any) => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const errors: any = {};
                if (!values.newImage) {
                    errors.newImage = 'Забыли фотографию';
                }
                  if (!values.name){
                    errors.name = "Забыли Имя"
                }
                  if (!values.reviews){
                    errors.reviews = "Забыли Отзыв"
                }
                return errors
            };
            // validate={validate}  criteriaMode="all"  shouldFocusError
    return (
        <Create
            title="Cool Studio → Отзывы учеников → добавить"
            redirect="list"
        >
            <SimpleForm toolbar={<CustomSaveToolBar />}
            validate={validate}  criteriaMode="all"  shouldFocusError
            >
                <ImageInput
                    source="newImage"
                    multiple={false}
                    accept="image/*"
                    label="Фото ученика"
                    placeholder={<p>Перетащите изображение для загрузки или щелкните, чтобы выбрать его.</p>}
                >
                    <ImageField
                        source="src"
                        title="Фото ученика"
                    />
                </ImageInput>
                <TextInput
                    source="name"
                    label="Имя"
                />
                <TextInput
                    source="reviews"
                    label="Отзыв"
                    multiline
                    sx={{maxWidth: "500px", width: "100%"}}
                />
            </SimpleForm>
        </Create>
    );
};
