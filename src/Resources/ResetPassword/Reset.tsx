import { Login } from "react-admin";
import { ResetForm } from "./ResetForm";
import { useSearchParams } from "react-router-dom";


const Reset = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token")!;
 
    return (
        <Login
            id="reset_background"
            resource="change_password"
        >
            <ResetForm token={token}/>
        </Login>
    );
};

export default Reset;
