import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { Button, CardContent, CircularProgress } from "@mui/material";
import { Form, required, useNotify, useSafeSetState } from "ra-core";
import { TextInput } from "react-admin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ResetForm = (props: LoginFormProps) => {
    const { className } = props;
    const [loading, setLoading] = useSafeSetState(false);
    const [success, setSuccess] = useState(false);
    const notify = useNotify();
    const navigate = useNavigate();

    const submit = (values: unknown) => {
        const { newPassword, verifyPassword } = values as { newPassword: string; verifyPassword: string };
        if (newPassword === verifyPassword) {
            setLoading(true);
            requestReset().then(() => {
                notify("Пароль успешно зарегистрирован");
                setSuccess(true);
            });
        } else {
            notify("введенные поля должны быть идентичны");
        }

        async function requestReset() {
            try {
                const formdata = new FormData();
                formdata.append("newPassword", newPassword);
                formdata.append("verifyPassword", verifyPassword);
                const requestOptions = {
                    method: "PUT",
                    body: formdata,
                };
                // FIX_ME how the server knows which password to change
                const response = await fetch(`${import.meta.env.VITE_COOL_API}/auth/changePassword`, requestOptions);

                if (response.ok) {
                    console.log("vse ok");
                } else {
                    notify(
                        "Что то пошло не так повторите запрос если это сообщение повторяется обратитесь разработчикам",
                    );
                }
            } catch {
                throw Error("Something went wrong on ResetForm.tsx");
            }
        }
    };

    return (
        <StyledForm
            onSubmit={submit}
            mode="onChange"
            noValidate
            className={className}
        >
            {!success ? (
                <CardContent className={LoginFormClasses.content}>
                    <TextInput
                        autoFocus
                        source="newPassword"
                        label="новый пароль"
                        validate={required()}
                        fullWidth
                    />
                    <TextInput
                        source="verifyPassword"
                        label="повторить пароль"
                        validate={required()}
                        fullWidth
                    />

                    <Button
                        variant="contained"
                        type="submit"
                        color="primary"
                        disabled={loading}
                        fullWidth
                        className={LoginFormClasses.button}
                    >
                        {loading ? (
                            <CircularProgress
                                className={LoginFormClasses.icon}
                                size={19}
                                thickness={3}
                            />
                        ) : (
                            "Отправить запрос"
                        )}
                    </Button>
                </CardContent>
            ) : (
                <Button
                    variant="contained"
                    color="primary"
                    type="button"
                    fullWidth
                    onClick={() => navigate("/login")}
                    className={LoginFormClasses.button}
                >
                    Перейти
                </Button>
            )}
        </StyledForm>
    );
};

const PREFIX = "RaLoginForm";

const LoginFormClasses = {
    content: `${PREFIX}-content`,
    button: `${PREFIX}-button`,
    icon: `${PREFIX}-icon`,
};

const StyledForm = styled(Form, {
    name: PREFIX,
    overridesResolver: (_props, styles) => styles.root,
})(({ theme }) => ({
    [`& .${LoginFormClasses.content}`]: {
        width: 300,
    },
    [`& .${LoginFormClasses.button}`]: {
        marginTop: theme.spacing(2),
    },
    [`& .${LoginFormClasses.icon}`]: {
        margin: theme.spacing(0.3),
    },
}));

interface LoginFormProps {
    redirectTo?: string;
    className?: string;
}

ResetForm.propTypes = {
    redirectTo: PropTypes.string,
};
