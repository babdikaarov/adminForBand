import { Login } from "react-admin";
import { ResetForm } from "./ResetForm";

const Reset = () => {
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
