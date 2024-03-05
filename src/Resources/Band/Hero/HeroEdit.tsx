import { Edit, SimpleForm, FileInput, FileField } from "react-admin";
import { ClickVideo } from "../../../shared/ClickVideo";
// import SaveEdit from "../../../shared/SaveEdit";
import CustomSaveEdit from "../../../shared/CustomSaveEdit";

export const HeroEdit = () => {
    // TODO test video on save if not works replase CustomSaveEdit with SaveEdit and remove noGoBack noRedirect attribute
    return (
        <Edit
            title="Cool Band → Банер"
            id={1}
        >
            <SimpleForm
                toolbar={
                    <CustomSaveEdit
                        noGoBack
                        noRedirect
                        resource="hero_band"
                    />
                }
            >
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
