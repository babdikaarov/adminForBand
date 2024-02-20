import { useState } from "react";
import { SaveButton, Toolbar } from "react-admin";

const SaveImage: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    const [isSuccess, setIsSuccess] = useState(false);
    // const notify = useNotify();

    return (
        <Toolbar>
            {!isSuccess && (
                <SaveButton
                    label="Сохранить"
                    mutationOptions={{
                        onSuccess: () => {
                            setIsSuccess(true);
                            onClick();
                        },
                    }}
                    type="button"
                    variant="text"
                />
            )}
            <button
                className="custom_ape_button"
                type="button"
                onClick={onClick}
            >
                Назад
            </button>
        </Toolbar>
    );
};

export default SaveImage;
