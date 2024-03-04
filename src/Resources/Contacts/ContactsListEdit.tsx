import { Edit, SimpleForm, TextInput } from "react-admin";

import { Box, Typography } from "@mui/material";
import CustomEditCreate from "../../shared/CustomEditCreate";
import { MuiPhone } from "./Phone";

export const ContactsListEdit = () => {
    return (
        <Edit
            title="Cool Band → Контакты"
            id={1}
        >
            <SimpleForm
                sx={{ maxWidth: 700 }}
                toolbar={<CustomEditCreate resource="contacts" />}
            >
                <Typography
                    variant="h6"
                    gutterBottom
                    width="100%"
                >
                    Репертуар
                </Typography>
                <br />
                <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
                    <Box
                        flex={1}
                        mr={{ xs: 0, sm: "0.5em" }}
                    >
                        <TextInput
                            type="tel"
                            source="whatsapp"
                            label="Ссылка на репертуар файл в облачном хранилище"
                            isRequired
                            fullWidth
                        />
                    </Box>
                </Box>
                <br />
                <Typography
                    variant="h6"
                    gutterBottom
                    width="100%"
                >
                    Контактные данные
                </Typography>
                <br />
                <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
                    <Box
                        flex={1}
                        mr={{ xs: 0, sm: "0.5em" }}
                    >
                        <MuiPhone
                            source="bandNumber"
                            label="Номер Cool Band"
                        />
                    </Box>
                    <Box
                        flex={1}
                        ml={{ xs: 0, sm: "0.5em" }}
                    >
                        <MuiPhone
                            source="studioNumber"
                            label="Номер Cool Studio"
                        />
                    </Box>
                </Box>
                <br />
                <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
                    <Box
                        flex={1}
                        mr={{ xs: 0, sm: "0.5em" }}
                    >
                        <TextInput
                            type="email"
                            source="email"
                            label="Почта"
                            isRequired
                            fullWidth
                        />
                    </Box>
                    <Box
                        flex={1}
                        ml={{ xs: 0, sm: "0.5em" }}
                    >
                        <TextInput
                            type="text"
                            source="telegram"
                            label="Телеграм номер или id"
                            isRequired
                            fullWidth
                        />
                    </Box>
                </Box>

                <br />
                <Typography
                    variant="h6"
                    gutterBottom
                    width="100%"
                >
                    Социальные сети
                </Typography>
                <br />
                <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
                    <Box
                        flex={1}
                        mr={{ xs: 0, sm: "0.5em" }}
                    >
                        <TextInput
                            type="url"
                            source="instagram"
                            label="Ссылка на Instagram Cool Band"
                            isRequired
                            fullWidth
                        />
                    </Box>
                    <Box
                        flex={1}
                        ml={{ xs: 0, sm: "0.5em" }}
                    >
                        <TextInput
                            type="url"
                            source="tiktok"
                            label="Ссылка на tiktok"
                            isRequired
                            fullWidth
                        />
                    </Box>
                </Box>
                <TextInput
                    type="url"
                    source="youtube"
                    label="Ссылка на youtube"
                    isRequired
                    fullWidth
                />
                <br />
                <Typography
                    variant="h6"
                    gutterBottom
                    width="100%"
                >
                    Адрес
                </Typography>
                <br />
                <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
                    <Box
                        flex={1}
                        mr={{ xs: 0, sm: "0.5em" }}
                    >
                        <TextInput
                            type="text"
                            // inputMode="numeric"
                            source="longitude"
                            label="Координаты долготы"
                            isRequired
                            fullWidth
                        />
                    </Box>
                    <Box
                        flex={1}
                        ml={{ xs: 0, sm: "0.5em" }}
                    >
                        <TextInput
                            type="text"
                            // inputMode="numeric"
                            source="latitude"
                            label="Координаты широты"
                            isRequired
                            fullWidth
                        />
                    </Box>
                </Box>
                <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
                    <Box
                        flex={1}
                        mr={{ xs: 0, sm: "0.5em" }}
                    >
                        <TextInput
                            type="text"
                            source="city"
                            label="Город"
                            isRequired
                            fullWidth
                        />
                    </Box>
                    <Box
                        flex={1}
                        ml={{ xs: 0, sm: "0.5em" }}
                    >
                        <TextInput
                            type="text"
                            // inputMode="numeric"
                            source="organizationId"
                            label="id организации"
                            isRequired
                            fullWidth
                        />
                    </Box>
                </Box>
                <TextInput
                    type="text"
                    source="address"
                    label="Адрес"
                    isRequired
                    fullWidth
                />
            </SimpleForm>
            <br />
            <br />
        </Edit>
    );
};
