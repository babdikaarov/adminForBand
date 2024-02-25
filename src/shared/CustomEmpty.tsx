import { Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { EditButton } from "react-admin";

const CustomEmpty = () => {
    return (
        <div>
            <Typography
                color="inherit"
                variant="body1"
                align="center"
                alignItems={"center"}
                display={"flex"}
                flexDirection={"column"}
                textTransform={"uppercase"}
                style={{ opacity: 0.7 }}
            >
                фотогрфии еще не загружены <br />
                Необходимо добавить фоторафию чтобы альбом стал видимым на странице
                <EditButton
                    label="Добавить Фото"
                    sx={{ textAlign: "center", display: "block", width: "200px" }}
                    icon={<AddIcon />}
                    to={"../2"}
                    variant="outlined"
                />
            </Typography>
        </div>
    );
};

export default CustomEmpty;
