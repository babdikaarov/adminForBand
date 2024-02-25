import { Button, SaveButton, Toolbar, useNotify } from "react-admin";
import { useNavigate } from "react-router-dom";
import { useFormContext, useFormState } from "react-hook-form";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import ContentSave from "@mui/icons-material/Save";
import { useEffect, useState } from "react";

const CustomSaveCreate = ({ to = "../", nameTo = "Назад" }) => {
    const { dirtyFields, isValidating, isSubmitting } = useFormState();
    const isDirty = Object.keys(dirtyFields).length > 0;
    const [icon, setIcon] = useState(<ContentSave color="inherit" />);
    const navigate = useNavigate();
    const notify = useNotify();
    const { reset } = useFormContext();

    useEffect(() => {
        if (isSubmitting) {
            setIcon(<CircularProgress color="inherit" />);
        } else if (isValidating) {
            setIcon(<CircularProgress color="inherit" />);
        } else {
            setIcon(<ContentSave color="inherit" />);
        }
    }, [isSubmitting, isValidating]);

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
                label="Добавить"
                type="button"
                disabled={!isDirty || isValidating || isSubmitting}
                mutationOptions={{
                    onSuccess: () => {
                        notify("Успешно добавлено");
                        reset();
                        navigate(-1);
                    },
                    onError: () => {
                        notify("Что то пошло не так проверьте обязательные поля");
                    },
                }}
            />

            <Button
                label={nameTo}
                size="large"
                onClick={() => navigate(to)}
            />
        </Toolbar>
    );
};

export default CustomSaveCreate;
