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
import CustomSaveCreate from "../../../shared/CustomSaveCreate";
import { useGetRecordId } from "react-admin";
import { Fragment } from "react";
import CustomSelectInput from "../../../shared/CustomSelectInput";
import { ModalImage } from "../../../shared/ModalImage";
import CustomSaveEdit from "../../../shared/CustomSaveEdit";
import CustomEmpty from "../../../shared/CustomEmpty";
import { textLengthExcess } from "../../../modules/validators";

export const EventStudioEdit = () => {
    const recordId = useGetRecordId();
    const { data, isLoading } = useGetList("event_studio_images");
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
        if (textLengthExcess(28, values.location)) {
            errors.location = "Неболее 28 символов или проверьте есть ли пробел в конце";
        }
        if (values.name) {
            values.name.split(" ").forEach((item: string) => {
                if (item.length > 22) {
                    errors.name = "Одно слово неболее 22 символов или проверьте есть ли пробел в конце";
                }
            });
        }

        if (values.name.split(" ")) {
            if (values.name.trim().split(" ").length > 2) {
                errors.name = "Неболее 2-х слов";
            }
        }

        return errors;
    };

    // validate={validateEdit}  criteriaMode="all"  shouldFocusError
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
                    <Edit title="Cool Studio → Галерея → Альбом → изменить">
                        <SimpleForm
                            toolbar={
                                <CustomSaveEdit
                                    noRedirect
                                    resource="event_studio"
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
                                        resource="event_studio_images"
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
                        title="Cool Band → Галерея → Альбом → Фотографии → добавить фото"
                    >
                        <SimpleForm
                            toolbar={
                                <CustomSaveCreate
                                    nameTo="В список фотографий"
                                    to={`/event_studio/${recordId}/1`}
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
