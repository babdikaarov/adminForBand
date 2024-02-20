import { useState } from "react";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { Link, Button, CardContent, CircularProgress } from "@mui/material";
import { Form, required, useLogin, useNotify, useSafeSetState } from "ra-core";
import { TextInput } from "react-admin";

export const CustomLoginForm = (props: LoginFormProps) => {
    const { redirectTo, className } = props;
    const [mail, setMail] = useState<string>("");
    const [loading, setLoading] = useSafeSetState(false);
    const login = useLogin();
    const notify = useNotify();
    const handleForgotPassword = () => {
        if (!mail) {
            notify("Нужно заполнить поле - почта ");
            return;
        }

        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
        if (!isValidEmail) {
            notify("Пожалуйста введите почту которая была в пользовании Админ панели - пример 'myEmail@gmail.com'");
        } else {
            sendResetLink();
        }
        async function sendResetLink() {
            try {
                if (!mail) return;

                const formdata = new FormData();
                formdata.append("email", mail);
                // deploy FIX_ME change the value linkToChangePassword to value from new .env = url
                // FIX_ME how the server knows which password to change LOGIC?
                formdata.append("linkToChangePassword", "http://localhost:5173/change_password");
                const requestOptions = {
                    method: "PUT",
                    body: formdata,
                };
                const response = await fetch(`${import.meta.env.VITE_COOL_API}/auth/forgotPassword`, requestOptions);
                if (response.ok) {
                    notify("Проверьте почту и перейдите по ссылке");
                } else {
                    notify(
                        "На сервере нет зарегистрированной почты проверьте правильность данных и попробуйте еще раз, если возникли трудости обратитесь к разработчикам",
                    );
                }
            } catch {
                throw Error("something went wrong while sending reset link to the email");
            }
        }
    };

    const submit = (values: unknown) => {
        setLoading(true);
        login(values, redirectTo)
            .then(() => {
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                notify(
                    typeof error === "string"
                        ? error
                        : typeof error === "undefined" || !error.message
                          ? "ra.auth.sign_in_error"
                          : error.message,
                    {
                        type: "error",
                        messageArgs: {
                            _: typeof error === "string" ? error : error && error.message ? error.message : undefined,
                        },
                    },
                );
            });
    };

    return (
        <StyledForm
            onSubmit={submit}
            mode="onChange"
            noValidate
            className={className}
        >
            <CardContent className={LoginFormClasses.content}>
                <TextInput
                    autoFocus
                    source="username"
                    label="Почта"
                    autoComplete="username"
                    validate={required()}
                    fullWidth
                    onChange={(e) => setMail(e.target.value)}
                />
                <TextInput
                    source="password"
                    label="Пароль"
                    type="password"
                    autoComplete="current-password"
                    validate={required()}
                    fullWidth
                />

                <Link
                    href="#"
                    variant="body1"
                    color="inherit"
                    underline="none"
                    onClick={handleForgotPassword}
                >
                    Забыли пароль
                </Link>
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
                        "Вход"
                    )}
                </Button>
            </CardContent>
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

CustomLoginForm.propTypes = {
    redirectTo: PropTypes.string,
};
