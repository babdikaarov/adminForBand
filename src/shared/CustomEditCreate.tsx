import { SaveButton, Toolbar, useNotify, useRecordContext, useUpdate } from "react-admin";
import { useFormState, useFormContext } from "react-hook-form";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import ContentSave from "@mui/icons-material/Save";
import { useEffect, useState } from "react";

const CustomEditCreate = ({resource }: {resource: string }) => {
    const { dirtyFields, isValidating, isSubmitting } = useFormState();
    const isDirty = Object.keys(dirtyFields).length > 0;
    const [icon, setIcon] = useState(<ContentSave color="inherit" />);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const notify = useNotify();

    useEffect(() => {
        if (isSubmitting) {
            setIcon(<CircularProgress color="inherit" />);
        } else if (isValidating) {
            setIcon(<CircularProgress color="inherit" />);
        } else {
            setIcon(<ContentSave color="inherit" />);
        }
    }, [isSubmitting, isValidating]);

    const [update] = useUpdate();
    const record = useRecordContext();
    const { getValues } = useFormContext();
    const data = getValues();

    const handleClick = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const { id } = record;

        update(
            resource,
            { id, data },
            {
                onSuccess: () => {
                    notify("Успешно сохранено");
                },
                onError: () => {
                    notify("Что то пошло не так проверьте обязательные поля");
                },
            },
        );
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
                icon={icon}
                label="Сохранить изменения"
                type="button"
                disabled={!isDirty || isValidating || isSubmitting}
                onClick={handleClick}
            />
        </Toolbar>
    );
};

export default CustomEditCreate;
