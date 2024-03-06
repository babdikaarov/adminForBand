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
    useGetRecordId,
} from "react-admin";
import { Fragment } from "react";
import CustomSaveToolBar from "../../../shared/CustomSaveCreate";
import CustomSelectInput from "../../../shared/CustomSelectInput";
import { ModalImage } from "../../../shared/ModalImage";
import CustomSaveEdit from "../../../shared/CustomSaveEdit";
import CustomEmpty from "../../../shared/CustomEmpty";
import { textLengthExcess } from "../../../modules/validators";

export const EventBandEdit = () => {
    const recordId = useGetRecordId();
    const { data, isLoading } = useGetList("event_band_images");
    const listContext = useList({ data, isLoading, filter: { albumId: recordId } });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const validateCreateImage = (values: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const errors: any = {};
        if (!values.newImage) {
            errors.newImage = "Забыли фотографию";
        }
        return errors;
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const validateEdit = (values: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const errors: any = {};
        if (!values.name) {
            errors.name = "Забыли Наименование";
        }
        if (textLengthExcess(30, values.name)) {
            errors.name = "Неболее 30 символов или проверьте есть ли пробел в конце";
        }

        return errors;
    };

    // validate={validate}  criteriaMode="all"  shouldFocusError
    return (
        <Show
            title=" "
            actions={
                <TopToolbar>
                    <ListButton
                        label="В список"
                        resource="event_band"
                    />
                </TopToolbar>
            }
        >
            <TabbedShowLayout>
                <TabbedShowLayout.Tab label="Альбом">
                    <Edit title="Cool Band → Галерея → Альбом → изменить">
                        <SimpleForm
                            toolbar={
                                <CustomSaveEdit
                                    noRedirect
                                    resource="event_band"
                                    goBack="../../"
                                />
                            }
                            validate={validateEdit}
                            criteriaMode="all"
                            shouldFocusError
                        >
                            <TextInput
                                source="id"
                                disabled
                                label="Альбом id"
                            />
                            <TextInput
                                source="name"
                                label="Наименование"
                                sx={{ width: "100%", maxWidth: "300px" }}
                                // validate={validateEdit}
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
                        title="Cool Band → Галерея → Альбом → Фотографии"
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
                                        resource="event_band_images"
                                        mutationMode="pessimistic"
                                    />
                                </Fragment>
                            }
                            empty={<CustomEmpty />}
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
                            {/* <BooleanField source="bluer" /> */}
                            <EditButton
                                resource="event_band_images"
                                label="Изменить"
                            />
                            <DeleteButton
                                resource="event_band_images"
                                redirect="#"
                                mutationMode="pessimistic"
                                label="Удалить"
                            />
                        </Datagrid>
                    </ListContextProvider>
                </TabbedShowLayout.Tab>
                <TabbedShowLayout.Tab label="Добавить">
                    <Create
                        resource="event_band_images"
                        title="Cool Band → Галерея → Альбом → Фотографии → добавить фото"
                    >
                        <SimpleForm
                            toolbar={
                                <CustomSaveToolBar
                                    nameTo="В список фотографий"
                                    to={`/event_band/${recordId}/1`}
                                />
                            }
                            sanitizeEmptyValues
                            validate={validateCreateImage}
                            criteriaMode="all"
                            shouldFocusError
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
