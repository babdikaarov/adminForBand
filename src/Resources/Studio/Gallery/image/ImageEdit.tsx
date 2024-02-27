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
    Button,
} from "react-admin";
import CustomSelectInput from "../../../../shared/CustomSelectInput";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ModalImage } from "../../../../shared/ModalImage";

export const ImageEdit = () => {
    const [idToNavigate, setIdToNavigate] = useState<number | null>(null);
    const recordId = useGetRecordId();
    const { data } = useGetOne("event_studio_images", { id: recordId });
    const { albumId } = data;

    const [update] = useUpdate();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSave = (data: any) => {
        update("event_studio_images", { id: recordId, data: data, previousData: data });
    };

    useEffect(() => {
        setIdToNavigate(albumId);
    }, [albumId]);

    return (
        <Edit
            resource="event_studio_images"
            title={`Cool Band → Галерея → Альбом → Фотографии → изменить фото`}
        >
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
                    label="Альбом id"
                />
                <ImageInput
                    source="newImage"
                    multiple={false}
                    accept="image/*"
                    label="Новое изображение"
                    placeholder={<p>Перетащите изображение для загрузки или щелкните, чтобы выбрать его.</p>}
                >
                    <ImageField
                        source="src"
                        title=""
                    />
                </ImageInput>
                <CustomSelectInput />
                <span style={{ opacity: "0.7", fontSize: 14 }}> На сервере:</span>
                <ModalImage source="image" />
                <BooleanInput
                    source="coverImage"
                    label="Обложка"
                />
            </SimpleForm>
        </Edit>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SaveImage = ({ albumId, handleSave }: { albumId: number | null; handleSave: (data: any) => void }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        if (!albumId) return;
        navigate(`/event_studio/${albumId}/1`);
    };

    return (
        <Toolbar
            sx={{
                position: "sticky",
                bottom: "0px",
                justifyContent: "space-between",
            }}
        >
            <SaveButton
                label="Сохранить"
                type="button"
                variant="text"
                mutationOptions={{
                    onSuccess: (data) => {
                        handleSave(data);
                        handleNavigate();
                    },
                }}
            />

            <Button
                label="Назад"
                size="large"
                onClick={handleNavigate}
            />
        </Toolbar>
    );
};
