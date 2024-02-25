import { Login } from "react-admin";
import { CustomLoginForm } from "./CustomLoginForm";

const CustomLogIn = () => {
    return (
        <Login id="login_background">
            <CustomLoginForm />
        </Login>
    );
};

export default CustomLogIn;
