import { Create, ImageField, ImageInput, SimpleForm, TextInput } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";

export const TeacherCreate = () => {
    return (
        <Create
            title="Cool Studio → Преподаватели → создать"
            redirect="list"
        >
            <SimpleForm toolbar={<CustomSaveToolBar />}>
                <TextInput
                    source="name"
                    title="name"
                />
                <ImageInput
                    source="newImage"
                    label="Постер"
                    multiple={false}
                    accept="image/*"
                >
                    <ImageField
                        source="src"
                        title=""
                    />
                </ImageInput>
                <TextInput
                    source="urlInstagram"
                    title="name"
                />
                <TextInput
                    source="position"
                    title="name"
                />
                <TextInput
                    source="description"
                    title="name"
                />
            </SimpleForm>
        </Create>
    );
};
