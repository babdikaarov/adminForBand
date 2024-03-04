import { Login } from "react-admin";
import { ResetForm } from "./ResetForm";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Reset = () => {
    const [searchParams] = useSearchParams();
    const [token, setToken] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const param = searchParams.get("token");
        if (!param) return;
        setToken(param);
        const url = new URL(window.location.href);
        url.searchParams.delete("token");
        navigate("/auth-callback", { replace: true });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Login
            id="reset_background"
            resource="change_password"
        >
            <ResetForm token={token} />
        </Login>
    );
};

export default Reset;
