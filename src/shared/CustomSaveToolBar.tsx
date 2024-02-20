import { SaveButton, Toolbar } from "react-admin";
import { useNavigate } from "react-router-dom";

const CustomSaveToolBar = () => {
    const navigate = useNavigate();
    return (
        <Toolbar>
            <SaveButton label="Save" />

            <button
                className="custom_ape_button"
                type="button"
                onClick={() => navigate("../")}
            >
                Назад
            </button>
        </Toolbar>
    );
};

export default CustomSaveToolBar;
