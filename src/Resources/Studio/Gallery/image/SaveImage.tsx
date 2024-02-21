import { SaveButton, Toolbar, useNotify } from "react-admin";
import { useNavigate } from "react-router-dom";

const SaveImage: React.FC = () => {
    const notify = useNotify();
    const navigate = useNavigate();

    return (
        <Toolbar>
            <SaveButton
                label="Сохранить"
                mutationOptions={{
                    onSuccess: () => {
                        notify("Успешно сохранено");
                    },
                }}
                type="button"
                variant="text"
            />

            <button
                className="custom_ape_button"
                type="button"
                onClick={() => navigate("/event_band")}
            >
                Назад
            </button>
        </Toolbar>
    );
};

export default SaveImage;
