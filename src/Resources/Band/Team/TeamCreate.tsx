import { Create, FieldTitle, FileField, FileInput, ImageField, ImageInput, SimpleForm, TextInput } from "react-admin";
import CustomSelectInput from "../../../shared/CustomSelectInput";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";

export const TeamCreate = () => {
    return (
        <Create
            title="Coll Band → Наша команда → добавить карточку"
            redirect="list"
        >
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
                <FieldTitle label="Описание" />
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
