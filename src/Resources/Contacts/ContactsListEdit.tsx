import { Edit, SaveButton, SimpleForm, TextInput } from "react-admin";

import { Box, Typography } from "@mui/material";

export const ContactsListEdit = () => {
    return (
        <Edit
            title="Coll Band → Контакты"
            id={1}
        >
            <SimpleForm
                sx={{ maxWidth: 700 }}
                toolbar={<SaveButton label="Сохранить изменения" />}
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
                            isRequired
                            fullWidth
                        />
                    </Box>
                </Box>
                <TextInput
                    type="email"
                    source="email"
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
                            isRequired
                            fullWidth
                        />
                    </Box>
                </Box>
                <TextInput
                    type="url"
                    source="youtube"
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
                            type="number"
                            inputMode="numeric"
                            source="longitude"
                            isRequired
                            fullWidth
                        />
                    </Box>
                    <Box
                        flex={1}
                        ml={{ xs: 0, sm: "0.5em" }}
                    >
                        <TextInput
                            type="number"
                            inputMode="numeric"
                            source="latitude"
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
                            isRequired
                            fullWidth
                        />
                    </Box>
                    <Box
                        flex={1}
                        ml={{ xs: 0, sm: "0.5em" }}
                    >
                        <TextInput
                            type="number"
                            inputMode="numeric"
                            source="organizationId"
                            isRequired
                            fullWidth
                        />
                    </Box>
                </Box>
                <TextInput
                    type="text"
                    source="address"
                    isRequired
                    fullWidth
                />
            </SimpleForm>
        </Edit>
    );
};