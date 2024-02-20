import {
    Edit,
    SimpleForm,
    DateInput,
    TextInput,
    // List,
    Datagrid,
    EditButton,
    Create,
    ImageInput,
    ImageField,
    BooleanInput,
    ChipField,
    BooleanField,
    DeleteButton,
    TextField,
    useGetList,
    useList,
    ListContextProvider,
} from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";
import { useGetRecordId } from "react-admin";
import { CreateButton } from "react-admin";
import { useState } from "react";
import CustomSelectInput from "../../../shared/CustomSelectInput";
import SaveImage from "./image/SaveImage";
import { ModalImage } from "../../../shared/ModalImage";
import { actionState } from "./actionState";
import { TActionStateType } from "./TActionStateType";

export const EventBandEdit = () => {
    const [action, setAction] = useState<TActionStateType>(actionState.list);
    const recordId = useGetRecordId();
    // console.log(recordId);
    const { data, isLoading } = useGetList("event_band_images");

    const listContext = useList({ data, isLoading, filter: { albumId: recordId } });

    // console.log(listContext);

    return action == actionState.list ? (
        <>
            <Edit title="Coll Band → Галерея → изменить">
                <SimpleForm toolbar={<CustomSaveToolBar />}>
                    <TextInput
                        source="id"
                        disabled
                        label="albumId"
                    />
                    <TextInput source="name" />
                    <DateInput source="date" />
                </SimpleForm>
            </Edit>
            <br />
            <CreateButton
                resource="event_band_images"
                variant="outlined"
                label="Добавить фото"
                onClick={() => setAction(actionState.create)}
                to=""
            />
            <ListContextProvider value={listContext}>
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="albumId" />
                    <ModalImage source="image" />
                    <ModalImage source="originalImage" />
                    <ChipField source="orientation" />
                    <BooleanField source="coverImage" />
                    <EditButton resource="event_band_images" />
                    <DeleteButton
                        redirect="#"
                        mutationMode="pessimistic"
                    />
                </Datagrid>
            </ListContextProvider>
        </>
    ) : (
        // action == actionState.create ?
        <Create
            resource="event_band_images"
            title="Coll Band → Альбом → Фото → добавить test"
        >
            <SimpleForm
                toolbar={<SaveImage onClick={() => setAction(actionState.list)} />}
                sanitizeEmptyValues
            >
                <TextInput
                    source="albumId"
                    defaultValue={recordId}
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
                <BooleanInput source="coverImage" />
            </SimpleForm>
        </Create>
    );

    // : //edit will render
    // <Edit resource="event_band_images">
    //    <SimpleForm toolbar={<SaveImage onClick={() => setAction(actionState.list)} />} >
    //       <TextInput source="albumId" defaultValue={recordId} disabled />
    //       <ImageInput source="newImage" label="Постер" multiple={false} accept="image/*">
    //          <ImageField source="src" title="" />
    //       </ImageInput>
    //       <CustomSelectInput />
    //       <BooleanInput source="coverImage" />
    //    </SimpleForm>
    // </Edit>
};
