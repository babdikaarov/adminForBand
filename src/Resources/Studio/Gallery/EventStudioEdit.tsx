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
    Labeled,
    SelectField,
} from "react-admin";
import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";
import { useGetRecordId } from "react-admin";
import { Fragment } from "react";
import CustomSelectInput from "../../../shared/CustomSelectInput";
import { ModalImage } from "../../../shared/ModalImage";

export const EventStudioEdit = () => {
    const recordId = useGetRecordId();
    const { data, isLoading } = useGetList("event_studio_images");
    const listContext = useList({ data, isLoading, filter: { albumId: recordId } });
    return (
        <Show
            title=" "
            actions={
                <TopToolbar>
                    <ListButton
                        label="В список"
                        resource="event_studio"
                    />
                </TopToolbar>
            }
        >
            <TabbedShowLayout>
                <TabbedShowLayout.Tab label="Альбом">
                    <Edit title="Coll Studio → Галерея → Альбом → изменить">
                        <SimpleForm toolbar={<CustomSaveToolBar to="../../" />}>
                            <TextInput
                                source="id"
                                disabled
                                label="Альбом id"
                            />
                            <TextInput
                                source="name"
                                label="Наименование"
                            />
                            <TextInput
                                source="location"
                                label="Локация"
                            />
                            <DateInput
                                source="date"
                                label="Дата"
                            />
                            <DeleteButton
                                disabled={listContext.data && listContext.data.length > 0 ? true : false}
                                label="Удалить Альбом"
                                mutationMode="pessimistic"
                            />
                        </SimpleForm>
                    </Edit>
                </TabbedShowLayout.Tab>

                <TabbedShowLayout.Tab label="Список">
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
                            <Labeled label="Изображение">
                                <ModalImage
                                    source="image"
                                    label={false}
                                />
                            </Labeled>
                            <SelectField
                                source="orientation"
                                choices={[
                                    { id: "PORTRAIT", name: "Портретная" },
                                    { id: "LANDSCAPE", name: "Альбомная" },
                                ]}
                                label="Вариант"
                                border={"1px solid"}
                                padding="3px"
                                borderRadius={50}
                            />
                            <BooleanField
                                source="coverImage"
                                label="Обложка"
                            />
                            <EditButton
                                resource="event_studio_images"
                                label="Изменить"
                            />
                            <DeleteButton
                                resource="event_studio_images"
                                redirect="#"
                                mutationMode="pessimistic"
                                label="Удалить"
                            />
                        </Datagrid>
                    </ListContextProvider>
                </TabbedShowLayout.Tab>
                <TabbedShowLayout.Tab label="Добавить">
                    <Create
                        resource="event_studio_images"
                        title="Coll Band → Галерея → Альбом → Фотографии → добавить фото"
                    >
                        <SimpleForm
                            toolbar={<CustomSaveToolBar to="/event_studio" />}
                            sanitizeEmptyValues
                        >
                            <TextInput
                                source="albumId"
                                defaultValue={recordId}
                                disabled
                                label="Альбом id"
                            />
                            <ImageInput
                                source="newImage"
                                multiple={false}
                                accept="image/*"
                                label="Новое изображение"
                                placeholder={
                                    <p>Перетащите изображение для загрузки или щелкните, чтобы выбрать его.</p>
                                }
                            >
                                <ImageField
                                    source="src"
                                    title=""
                                />
                            </ImageInput>
                            <CustomSelectInput />
                            <BooleanInput
                                source="coverImage"
                                label="Обложка"
                            />
                        </SimpleForm>
                    </Create>
                </TabbedShowLayout.Tab>
            </TabbedShowLayout>
        </Show>
    );
};
