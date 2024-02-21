import { useState } from "react";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { Button, CardContent, CircularProgress } from "@mui/material";
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
                formdata.append("linkToChangePassword", `${import.meta.env.VITE_COOL_URL}/auth-callback`);
                const requestOptions = {
                    method: "PUT",
                    body: formdata,
                };
                const response = await fetch(`${import.meta.env.VITE_COOL_API}/auth/forgotPassword`, requestOptions);
                if (response.ok) {
                    // const expireAt = new Date(new Date().getTime() + 1) // 0.01 sec
                    const expireAt = new Date(new Date().getTime() + 20 * 60 * 1000); // 20 min
                    notify("Проверьте почту и перейдите по ссылке она будет активна в течении 20-мин");
                    const data = await response.json();
                    localStorage.setItem("reset", JSON.stringify({ token: data["token"], expireAt }));

                    // console.log(expireAt > new Date())
                    // const reset = localStorage.getItem("reset")

                    // console.log(JSON.parse(reset!))
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

                <Button
                    variant="outlined"
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
                <Button
                    variant="outlined"
                    color="primary"
                    type="button"
                    onClick={handleForgotPassword}
                    fullWidth
                    className={LoginFormClasses.button}
                >
                    Забыл пароль
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
