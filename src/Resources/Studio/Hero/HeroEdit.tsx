import { Edit, FileField, FileInput, SaveButton, SimpleForm, TextInput } from "react-admin";
import { ClickVideo } from "../../../shared/ClickVideo";

export const HeroEdit = () => {

    return (
        <Edit
            title="Cool Studio → Баннер"
            id={1}
        >
            <SimpleForm toolbar={<SaveButton label="Сохранить изменения" />}>
                <TextInput
                    source="title"
                    title="name"
                    fullWidth
                />
                <TextInput
                    source="text"
                    title="name"
                    fullWidth
                />
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
                <h3> На сервере:</h3>
                <ClickVideo
                    source="video"
                    label="Видео"
                />
            </SimpleForm>
        </Edit>
    );
};
