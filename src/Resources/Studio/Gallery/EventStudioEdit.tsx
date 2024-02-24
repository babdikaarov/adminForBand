import {
    Edit,
    SimpleForm,
    DateInput,
    TextInput,
    Datagrid,
    EditButton,
    Create,
    ImageInput,
    ImageField,
    BooleanInput,
    ChipField,
    BooleanField,
    DeleteButton,
    // TextField,
    useGetList,
    useList,
    ListContextProvider,
    BulkDeleteButton,
    TabbedShowLayout,
    Show,
    List,
    TopToolbar,
    ListButton,
} from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";
import { useGetRecordId } from "react-admin";
import { Fragment } from "react";
import CustomSelectInput from "../../../shared/CustomSelectInput";
import SaveImage from "./image/SaveImage";
import { ModalImage } from "../../../shared/ModalImage";

export const EventStudioEdit = () => {
    const recordId = useGetRecordId();
    const { data, isLoading } = useGetList("event_studio_images");
    const listContext = useList({ data, isLoading, filter: { albumId: recordId } });
    return (
        <Show title=" " actions={
            <TopToolbar>
                <ListButton label="В список" resource="event_band" />
                </TopToolbar>
        } >
            <TabbedShowLayout>
                <TabbedShowLayout.Tab label="Album detail">
                    <Edit title="Coll Studio → Галерея → Альбом → изменить">
                        <SimpleForm toolbar={<CustomSaveToolBar to="../../" />}>
                            <TextInput
                                source="id"
                                disabled
                                label="albumId"
                            />
                            <TextInput source="name" />
                            <TextInput source="location" />
                            <DateInput source="date" />
                            <DeleteButton disabled={listContext.data && listContext.data.length > 0 ? true : false} />
                        </SimpleForm>
                    </Edit>
                </TabbedShowLayout.Tab>

                <TabbedShowLayout.Tab label="Photo list">
                    <List
                        title="Coll Band → Галерея → Альбом → Фотографии"
                        hasCreate={false}
                        exporter={false}
                        pagination={false}
                        sx={{
                            height: 0,
                        }}
                    >
                        <></>
                    </List>
                    <ListContextProvider value={listContext}>
                        <Datagrid
                            bulkActionButtons={
                                <Fragment>
                                    <BulkDeleteButton
                                        resource="event_studio_images"
                                        mutationMode="pessimistic"
                                    />
                                </Fragment>
                            }
                            title=" asdasd"
                        >
                            <ModalImage source="originalImage" />
                            <ChipField source="orientation" />
                            <BooleanField source="coverImage" />
                            <EditButton resource="event_studio_images" />
                            <DeleteButton
                                resource="event_studio_images"
                                redirect="#"
                                mutationMode="pessimistic"
                            />
                        </Datagrid>
                    </ListContextProvider>
                </TabbedShowLayout.Tab>
                <TabbedShowLayout.Tab label="Добавить фото">
                    <Create
                        resource="event_studio_images"
                        title="Coll Band → Галерея → Альбом → Фотографии → добавить фото"
                    >
                        <SimpleForm
                            toolbar={<SaveImage />}
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
                </TabbedShowLayout.Tab>
            </TabbedShowLayout>
        </Show>
    );
};
