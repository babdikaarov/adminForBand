import { SaveButton, Toolbar } from "react-admin";
import { useNavigate } from "react-router-dom";

const CustomSaveToolBar = ({ to = "../" }) => {
    const navigate = useNavigate();
    return (
        <Toolbar
            sx={{
                position: "sticky",
                bottom: "0px",
            }}
        >
            <SaveButton label="Сохранить" />

            <button
                className="custom_ape_button"
                type="button"
                onClick={() => navigate(to)}
            >
                Назад
            </button>
        </Toolbar>
    );
};

export default CustomSaveToolBar;
