import { ImageField, ImageInput, TextInput } from "react-admin";
import { Create, SimpleForm } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";

export const CoursesCreate = () => {
    return (
        <Create
            title="Cool Studio → Направления → создать"
            redirect="list"
        >
            <SimpleForm toolbar={<CustomSaveToolBar />}>
                <ImageInput
                    source="newImage"
                    label="icon направления"
                    multiple={false}
                    accept="image/*"
                >
                    <ImageField
                        source="src"
                        title="новое лого"
                    />
                </ImageInput>
                <TextInput
                    source="name"
                    title="name"
                />
            </SimpleForm>
        </Create>
    );
};
