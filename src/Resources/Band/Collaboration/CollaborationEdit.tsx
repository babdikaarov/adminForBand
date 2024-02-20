import { Edit, SimpleForm, TextInput, ImageInput, ImageField } from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";

export const CollaborationEdit = () => {
    return (
        <Edit
            title="Coll Band → Коллаборация → изменить"
            redirect="list"
        >
            <SimpleForm toolbar={<CustomSaveToolBar />}>
                <ImageInput
                    source="newImage"
                    label="Аватар"
                    multiple={false}
                    accept="image/*"
                >
                    <ImageField
                        source="src"
                        title="Аватар"
                    />
                </ImageInput>
                <TextInput source="name" />
            </SimpleForm>
        </Edit>
    );
};
