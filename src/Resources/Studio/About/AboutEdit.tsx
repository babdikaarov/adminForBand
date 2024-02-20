import { UrlField } from "react-admin";
import { Edit, SimpleForm, TextInput } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";
/*
 */
export const AboutEdit = () => {
    /*
     */
    return (
        <Edit
            title="Cool Studio → О нас → изменить"
            redirect="list"
        >
            <SimpleForm toolbar={<CustomSaveToolBar />}>
                <TextInput
                    source="youtubeUrl"
                    title="youtubeUrl"
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
