import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { Button, CardContent, CircularProgress } from "@mui/material";
import { Form, required, useNotify, useSafeSetState } from "ra-core";
import { TextInput } from "react-admin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ResetForm = (props: LoginFormProps) => {
    const { className, token } = props;
    const [loading, setLoading] = useSafeSetState(false);
    const [toLogIn, setToLogIn] = useState(false);
    const notify = useNotify();
    const navigate = useNavigate();

    const submit = (values: unknown) => {
        const { newPassword, verifyPassword } = values as { newPassword: string; verifyPassword: string };
        if (newPassword === verifyPassword) {
            setLoading(true);
            requestReset();
        } else {
            notify("введенные поля должны быть идентичны");
        }

        async function requestReset() {
            try {
                const body = {
                    newPassword,
                    verifyPassword,
                };
                const headers = new Headers();
                const encoder = new TextEncoder();
                const jsonData = JSON.stringify(body);
                const contentLength = encoder.encode(jsonData).length;
                // const reset = localStorage.getItem("reset");
                // const verify: { token: string; expireAt: string; role: string } = JSON.parse(reset!);
                // console.log(verify)
                headers.set("Authorization", `Bearer ${token}`);
                headers.set("Content-Type", `application/json`);
                headers.set("Content-Length", contentLength.toString());
                const requestOptions = {
                    method: "PUT",
                    headers,
                    body: JSON.stringify(body),
                };

                // console.log( headers)
                // console.log(verify);

                // if (new Date(verify.expireAt) < new Date()) {
                //     notify("Ваша ссылка expired already");
                //     setLoading(false);

                //     setToLogIn(true);
                // } else {
                    const response = await fetch(
                        `${import.meta.env.VITE_COOL_API}/auth/changePassword`,
                        requestOptions,
                    );
                    if (response.ok) {
                        setLoading(false);
                        setToLogIn(true);
                        notify("Пароль успешно зарегистрирован");

                        // localStorage.removeItem("reset");
                    } else {
                        setLoading(false);
                        notify(
                            "Ошибка сервера повторите запрос если это сообщение повторяется обратитесь разработчикам",
                        );
                    }
                    // }
                } catch (error) {
                    setLoading(false);
                    notify(
                        "Ошибка сервера повторите запрос если это сообщение повторяется обратитесь разработчикам",
                    );
                // console.log(error)
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
            {!toLogIn ? (
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
    token: string;
}

ResetForm.propTypes = {
    redirectTo: PropTypes.string,
};
