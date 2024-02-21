import { SaveButton, UrlField } from "react-admin";
import { Edit, SimpleForm, TextInput } from "react-admin";
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
            <SimpleForm toolbar={<SaveButton label="Сохранить изменения" />}>
                <TextInput
                    source="youtubeUrl"
                    title="youtubeUrl"
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
