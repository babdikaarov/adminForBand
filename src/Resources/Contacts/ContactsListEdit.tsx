import { Edit, SaveButton, SimpleForm, TextInput, Toolbar } from "react-admin";

import { Box, Typography } from "@mui/material";

export const ContactsListEdit = () => {
    return (
        <Edit
            title="Cool Band → Контакты"
            id={1}
        >
            <SimpleForm
                sx={{ maxWidth: 700 }}
                toolbar={
                    <Toolbar>
                        <SaveButton label="Сохранить изменения" />
                    </Toolbar>
                }
            >
                <Typography
                    variant="h6"
                    gutterBottom
                >
                    Контактные данные
                </Typography>
                <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
                    <Box
                        flex={1}
                        mr={{ xs: 0, sm: "0.5em" }}
                    >
                        <TextInput
                            type="tel"
                            source="bandNumber"
                            label="Номер Cool Band"
                            inputMode="numeric"
                            isRequired
                            fullWidth
                        />
                    </Box>
                    <Box
                        flex={1}
                        ml={{ xs: 0, sm: "0.5em" }}
                    >
                        <TextInput
                            type="tel"
                            source="studioNumber"
                            label="Номер Cool Studio"
                            inputMode="numeric"
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
                            type="tel"
                            source="whatsapp"
                            label="Номер Whatsapp"
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
                <TextInput
                    type="email"
                    source="email"
                    label="Почта"
                    isRequired
                    fullWidth
                />
                <br />
                <Typography
                    variant="h6"
                    gutterBottom
                >
                    Социальные сети
                </Typography>
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
                >
                    Адресс
                </Typography>
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
                    <Box
                        flex={1}
                        mr={{ xs: 0, sm: "0.5em" }}
                    >
                        <TextInput
                            type="text"
                            source="city"
                            label="Горол"
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
                    label="Адресс"
                    isRequired
                    fullWidth
                />
            </SimpleForm>
            <br />
            <br />
        </Edit>
    );
};
