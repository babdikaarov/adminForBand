import { Edit, SimpleForm, FileInput, FileField, SaveButton } from "react-admin";
import { ClickVideo } from "../../../shared/ClickVideo";

export const HeroEdit = () => {
    return (
        <Edit
            title="Coll Band → Банер"
            id={1}
        >
            <SimpleForm toolbar={<SaveButton label="Сохранить изменения" />}>
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
