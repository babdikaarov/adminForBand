import { UrlField } from "react-admin";
import { Edit, SimpleForm, TextInput } from "react-admin";
import CustomEditCreate from "../../../shared/CustomEditCreate";
/*
 */
export const AboutEdit = () => {
    /*
     */
    return (
        <Edit
            title="Cool Studio → О нас"
            id={1}
        >
            <SimpleForm toolbar={<CustomEditCreate resource="about_us_studio" />}>
                <TextInput
                    source="youtubeUrl"
                    label="Ссылка на youtube видео"
                    fullWidth
                />
                <h3> На сервере:</h3>
                <UrlField
                    source="youtubeUrl"
                    title="На сервере"
                    target="blank"
                />
            </SimpleForm>
        </Edit>
    );
};
