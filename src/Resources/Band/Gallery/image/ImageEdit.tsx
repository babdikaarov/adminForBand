import {
    BooleanInput,
    Edit,
    ImageField,
    ImageInput,
    SaveButton,
    SimpleForm,
    TextInput,
    Toolbar,
    useGetOne,
    useUpdate,
    useGetRecordId,
} from "react-admin";
import CustomSelectInput from "../../../../shared/CustomSelectInput";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ModalImage } from "../../../../shared/ModalImage";

export const ImageEdit = () => {
    const [idToNavigate, setIdToNavigate] = useState<number | null>(null);
    const recordId = useGetRecordId();
    const { data } = useGetOne("event_band_images", { id: recordId });
    const { albumId } = data;

    const [update] = useUpdate();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSave = (data: any) => {
        update("event_band_images", { id: recordId, data: data, previousData: data });
    };

    useEffect(() => {
        setIdToNavigate(albumId);
    }, [albumId]);

    return (
        <Edit resource="event_band_images">
            <SimpleForm
                toolbar={
                    <SaveImage
                        albumId={idToNavigate}
                        handleSave={handleSave}
                    />
                    
                }
                sanitizeEmptyValues
            >
                <TextInput
                    source="albumId"
                    disabled
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
                <CustomSelectInput />
                <ModalImage source="image" />
                <BooleanInput source="coverImage" />
            </SimpleForm>
        </Edit>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SaveImage = ({ albumId, handleSave }: { albumId: number | null; handleSave: (data: any) => void }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        if (!albumId) return;
        navigate(`/event_band/${albumId}`);
    };

    return (
        <Toolbar>
            <SaveButton
                label="Сохранить"
                mutationOptions={{
                    onSuccess: (data) => {
                        handleSave(data);
                        handleNavigate();
                    },
                }}
                type="button"
                variant="text"
            />

            <button
                className="custom_ape_button"
                type="button"
                onClick={handleNavigate}
            >
                Назад
            </button>
        </Toolbar>
    );
};
