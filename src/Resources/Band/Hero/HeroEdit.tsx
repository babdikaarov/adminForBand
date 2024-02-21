import { Edit, SimpleForm, FileInput, UrlField, FileField, SaveButton } from "react-admin";

export const HeroEdit = () => {
    return (
        <Edit title="Coll Band → Банер" id={1}>
            <SimpleForm 
            toolbar={<SaveButton label="Сохранить изменения"/>}
            >
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
                <h3> На сервере сейчас:</h3>
                <UrlField
                    source="video"
                    title="На сервере"
                    target="blank"
                />
            </SimpleForm>
        </Edit>
    );
};
