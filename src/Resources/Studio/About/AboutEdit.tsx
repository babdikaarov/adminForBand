import { UrlField } from "react-admin";
import { Edit, SimpleForm, TextInput } from "react-admin";
import CustomSaveEdit from "../../../shared/CustomSaveEdit";

export const AboutEdit = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const validate = (values: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const errors: any = {};
        if (!values.youtubeUrl) {
            errors.youtubeUrl = "Забыли ссылку";
        }
        return errors;
    };
    // validate={validate}  criteriaMode="all"  shouldFocusError
    return (
        <Edit
            title="Cool Studio → О нас"
            id={1}
        >
            <SimpleForm
                toolbar={
                    <CustomSaveEdit
                        noRedirect
                        resource="about_us_studio"
                    />
                }
                validate={validate}
                criteriaMode="all"
                shouldFocusError
            >
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
