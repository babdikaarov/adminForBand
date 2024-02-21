import {
    Labeled,
    Show,
    TabbedShowLayout,
    TextField,
    Edit,
    SimpleForm,
    TextInput,
} from "react-admin";

import { Box, Typography } from "@mui/material";
import CustomSaveToolBar from "../../shared/CustomSaveToolBar";


export const ContactsList = () => {


    return (
        <Edit title="Coll Band → Контакты → изменить" id={1}>
            <SimpleForm
                sx={{ maxWidth: 700 }}
                toolbar={<CustomSaveToolBar />}
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

    // return (
    //     <Show
    //         title="Coll Band → Контакты"
    //         id={1}
    //     >
    //         <TabbedShowLayout>
    //             <TabbedShowLayout.Tab
    //                 label=" "
    //                 sx={{ display: "none" }}
    //             >
    //                 <Typography
    //                     variant="h6"
    //                     gutterBottom
    //                 >
    //                     Контактные данные
    //                 </Typography>
    //                 <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
    //                     <Box
    //                         flex={1}
    //                         mr={{ xs: 0, sm: "0.5em" }}
    //                     >
    //                         <Labeled label="bandNumber">
    //                             <TextField source="bandNumber" />
    //                         </Labeled>
    //                     </Box>
    //                     <Box
    //                         flex={1}
    //                         ml={{ xs: 0, sm: "0.5em" }}
    //                     >
    //                         <Labeled label="studioNumber">
    //                             <TextField source="studioNumber" />
    //                         </Labeled>
    //                     </Box>
    //                 </Box>
    //                 <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
    //                     <Box
    //                         flex={1}
    //                         mr={{ xs: 0, sm: "0.5em" }}
    //                     >
    //                         <Labeled label="whatsapp">
    //                             <TextField source="whatsapp" />
    //                         </Labeled>
    //                     </Box>
    //                     <Box
    //                         flex={1}
    //                         ml={{ xs: 0, sm: "0.5em" }}
    //                     >
    //                         <Labeled label="telegram">
    //                             <TextField source="telegram" />
    //                         </Labeled>
    //                     </Box>
    //                 </Box>
    //                 <Labeled label="studiemailoNumber">
    //                     <TextField source="email" />
    //                 </Labeled>
    //                 <br />
    //                 <Typography
    //                     variant="h6"
    //                     gutterBottom
    //                 >
    //                     Социальные сети
    //                 </Typography>
    //                 <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
    //                     <Box
    //                         flex={1}
    //                         mr={{ xs: 0, sm: "0.5em" }}
    //                     >
    //                         <Labeled label="instagram">
    //                             <TextField source="instagram" />
    //                         </Labeled>
    //                     </Box>
    //                     <Box
    //                         flex={1}
    //                         ml={{ xs: 0, sm: "0.5em" }}
    //                     >
    //                         <Labeled label="tiktok">
    //                             <TextField source="tiktok" />
    //                         </Labeled>
    //                     </Box>
    //                 </Box>
    //                 <Labeled label="youtube">
    //                     <TextField source="youtube" />
    //                 </Labeled>
    //                 <br />
    //                 <Typography
    //                     variant="h6"
    //                     gutterBottom
    //                 >
    //                     Адресс
    //                 </Typography>
    //                 <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
    //                     <Box
    //                         flex={1}
    //                         mr={{ xs: 0, sm: "0.5em" }}
    //                     >
    //                         <Labeled label="longitude">
    //                             <TextField source="longitude" />
    //                         </Labeled>
    //                     </Box>
    //                     <Box
    //                         flex={1}
    //                         ml={{ xs: 0, sm: "0.5em" }}
    //                     >
    //                         <Labeled label="latitude">
    //                             <TextField source="latitude" />
    //                         </Labeled>
    //                     </Box>
    //                     <Box
    //                         flex={1}
    //                         mr={{ xs: 0, sm: "0.5em" }}
    //                     >
    //                         <Labeled label="city">
    //                             <TextField source="city" />
    //                         </Labeled>
    //                     </Box>
    //                     <Box
    //                         flex={1}
    //                         ml={{ xs: 0, sm: "0.5em" }}
    //                     >
    //                         <Labeled label="organizationId">
    //                             <TextField source="organizationId" />
    //                         </Labeled>
    //                     </Box>
    //                 </Box>
    //                 <Labeled label="address">
    //                     <TextField source="address" />
    //                 </Labeled>
    //             </TabbedShowLayout.Tab>
    //         </TabbedShowLayout>
    //     </Show>
    // );
};
