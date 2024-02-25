import { Button, SaveButton, Toolbar, useNotify } from "react-admin";
import { useNavigate } from "react-router-dom";

const CustomSaveToolBar = ({ to = "../" }) => {
    const navigate = useNavigate();
    const notify = useNotify();
    return (
        <Toolbar
            sx={{
                position: "sticky",
                bottom: "0px",
                justifyContent: "space-between",
            }}
        >
            <SaveButton
                label="Сохранить"
                type="button"
                variant="text"
                mutationOptions={{
                    onSuccess: () => {
                        notify("Успешно сохранено");
                    },
                }}
            />

            <Button
                label="Назад"
                size="large"
                onClick={() => navigate(to)}
            />
        </Toolbar>
    );
};

export default CustomSaveToolBar;
