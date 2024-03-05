// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validate = (values: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const errors: any = {};

    if (!values.whatsapp) {
        errors.whatsapp = "Забыли Ссылку на репертуар";
    }
    if (!values.bandNumber) {
        errors.bandNumber = "Забыли Номер ";
    }
    if (!values.studioNumber) {
        errors.studioNumber = "Забыли Номер ";
    }
    if (!values.email) {
        errors.email = "Забыли Почту ";
    }
    if (!values.telegram) {
        errors.telegram = "Забыли Телеграм ";
    }
    if (!values.instagram) {
        errors.instagram = "Забыли Instagram ";
    }
    if (!values.tiktok) {
        errors.tiktok = "Забыли tiktok ";
    }
    if (!values.youtube) {
        errors.youtube = "Забыли youtube ";
    }
    if (!values.longitude) {
        errors.longitude = "Забыли Координаты долготы ";
    }
    if (!values.latitude) {
        errors.latitude = "Забыли Координаты широты ";
    }
    if (!values.city) {
        errors.city = "Забыли Город ";
    }
    if (!values.organizationId) {
        errors.organizationId = "Забыли id организации";
    }
    if (!values.address) {
        errors.address = "Забыли Адрес";
    }
    if (values.address) {
        values.address.split(" ").forEach((item: string) => {
            if (item.length > 22) {
                errors.address = "Одно слово неболее 22 символов";
            }
        });
    }
    return errors;
};
