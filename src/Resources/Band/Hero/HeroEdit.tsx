import { Edit, SimpleForm, FileInput, FileField } from "react-admin";
import { ClickVideo } from "../../../shared/ClickVideo";
import SaveEdit from "../../../shared/SaveEdit";

export const HeroEdit = () => {
    return (
        <Edit
            title="Cool Band → Банер"
            id={1}
        >
            <SimpleForm toolbar={<SaveEdit resource="hero_band" />}>
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
                <h3> На сервере:</h3>
                <ClickVideo
                    source="video"
                    label="Видео"
                />
            </SimpleForm>
        </Edit>
    );
};
