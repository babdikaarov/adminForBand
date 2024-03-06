import { Create, FieldTitle, FileField, FileInput, ImageField, ImageInput, SimpleForm, TextInput } from "react-admin";
import CustomSelectInput from "../../../shared/CustomSelectInput";
import CustomSaveCreate from "../../../shared/CustomSaveCreate";
import { textLengthExcess } from "../../../modules/validators";

export const TeamCreate = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const validate = (values: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const errors: any = {};
        if (!values.newImage) {
            errors.newImage = "Забыли фотографию";
        }
        if (!values.newVideo) {
            errors.newVideo = "Забыли видео";
        }
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
    // validate={validate}  criteriaMode="all"  shouldFocusError

    return (
        <Create
            title="Cool Band → Наша команда → добавить карточку"
            redirect="list"
        >
            <SimpleForm
                toolbar={<CustomSaveCreate />}
                validate={validate}
                criteriaMode="all"
                shouldFocusError
            >
                <FieldTitle label="Карточка спереди" />
                <ImageInput
                    source="newImage"
                    multiple={false}
                    accept="image/*"
                    isRequired
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
                <FieldTitle label="Описание" />
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

            {/* <TabbedForm toolbar={<CustomSaveButton transform={transformTeam} />}>
            <TabbedForm.Tab label="Карточка спереди">
               <ImageInput format={handlePreview} source="image" label="Постер" multiple={false} accept="image/*">
                  <ImageField source="src" title="" />
               </ImageInput>
               <CustomSelectInput />
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Карточка сзади">
               <FileInput source="video" accept="video/*" multiple={false}>
                  <FileField source="src" title="title" target="blank" />
               </FileInput>
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Текст">
               <TextInput source="instrument" label="Роль" defaultValue={() => emptyStringValue} />
               <TextInput source="name" label="Имя" />
            </TabbedForm.Tab>
         </TabbedForm> */}
        </Create>
    );
};
