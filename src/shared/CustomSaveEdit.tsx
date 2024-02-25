import { Button, SaveButton, Toolbar, useNotify, useRecordContext, useUpdate } from "react-admin";
import { useNavigate } from "react-router-dom";
import { useFormState, useFormContext } from "react-hook-form";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import ContentSave from "@mui/icons-material/Save";
import { useEffect, useState } from "react";

const CustomSaveEdit = ({ goBack = "../", resource }: { goBack?: string; resource: string }) => {
    const { dirtyFields, isValidating, isSubmitting } = useFormState();
    const isDirty = Object.keys(dirtyFields).length > 0;
    const [icon, setIcon] = useState(<ContentSave color="inherit" />);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const navigate = useNavigate();
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
                    navigate(-1);
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
                label="Сохранить"
                type="button"
                disabled={!isDirty || isValidating || isSubmitting}
                onClick={handleClick}
            />

            <Button
                label="Назад"
                size="large"
                onClick={() => navigate(goBack)}
            />
        </Toolbar>
    );
};

export default CustomSaveEdit;
