import { Login, useNotify } from "react-admin";
import { ResetForm } from "./ResetForm";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as jose from "jose";
import { useEffect } from "react";

const Reset = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const notify = useNotify();

    useEffect(() => {
        const token = searchParams.get("reset") as string;
        if (!token) {
            navigate("/login");
            notify("Нет прав на эту страницу");
            return;
        }
        verify();
        async function verify() {
            const secretKey = jose.base64url.decode(import.meta.env.VITE_KEY);
            try {
                await jose
                    .jwtVerify(token, secretKey, {
                        issuer: import.meta.env.VITE_ISSUER,
                    })
                    .then(() => notify("Введите новый пароль"))
                    .catch(() => {
                        notify("Ссылка устарела");
                        navigate("/login");
                    });
            } catch (err) {
                console.error(err);
                // navigate('../')
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Login
            id="reset_background"
            resource="change_password"
        >
            <ResetForm />
        </Login>
    );
};

export default Reset;
