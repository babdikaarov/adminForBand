import { required, email, number, minLength, maxLength } from "react-admin";

/**
 *
 *
 * @example
 * Mojno napisat doc
 *
 *
 *
 */

const validatePhoneNumber = (message: string) => (value: string) => {
    // Define your custom regex pattern for phone numbers
    const phonePattern = /^\d{1,4}\d{1,15}$/;

    return value && !phonePattern.test(value) ? message : undefined;
};

const validateTelegram = (message: string) => (value: string) => {
    // Updated regex pattern for phone numbers or Telegram user ID
    const telegramPattern = /^(?:\d{1,4}\d{1,15}|[a-z0-9_]+)$/;

    return value && !telegramPattern.test(value) ? message : undefined;
};

const validateOrganizationIdField = [
    required(),
    maxLength(17, "ID компании из 2gis дожно быть 17 чисел (Сюда нужно сделать подробную инфу как взять этот ID)"),
    minLength(17, "ID компании из 2gis дожно быть 17 чисел (Сюда нужно сделать подробную инфу как взять этот ID)"),
];

const validateUrl = (expectedPrefix: string, message: string) => (value: string) => {
    return value && value.startsWith(expectedPrefix) ? undefined : message;
};

const validateEmailField = [required(), email("Пожалуста предоставьте почту")];

const validateInstagramField = [
    required(),
    validateUrl("https://www.instagram.com/", "Instagram ссылка должна начинатся с https://www.instagram.com/..."),
];

const validateYoutubeField = [
    required(),
    validateUrl("https://www.youtube.com/", "Youtube ссылка должна начинатся с https://www.youtube.com/..."),
];

const validateTikTokField = [
    required(),
    validateUrl("https://www.tiktok.com/", "TikTok ссылка должна начинатся с https://www.tiktok.com/..."),
];

const validateAddressField = [
    required("Введите адрес который будет отображатся в самом низу страницы"),
    // validateUrl(
    //    "https://2gis.kg/bishkek/firm/",
    //    "Пожалуйста проверьте URL ссылку на правильность должно начинатся с https://2gis.kg/bishkek/firm/....",
    // ),
];

const validateLongitude = [required(), number("Сюда нужно сделать подробную инфу как взять координаты долготы")];

const validateLatitude = [required(), number("Сюда нужно сделать подробную инфу как взять координаты широты")];

const validateTelegramField = [required(), validateTelegram("Must be a valid Telegram number or user ID")];

const validateBandNumber = [
    required(),
    validatePhoneNumber("Формат телефона должен соответвовать: 996312773399 без пробелов"),
];

const validateStudioNumber = [
    required(),
    validatePhoneNumber("Формат телефона должен соответвовать: 996312773399 без пробелов"),
];

const validateWhatsapp = [
    required(),
    validatePhoneNumber("Формат телефона должен соответвовать: 996312773399 без пробелов"),
];

export default {
    validateBandNumber,
    validateStudioNumber,
    validateWhatsapp,
    validateTelegramField,
    validateLongitude,
    validateLatitude,
    validateOrganizationIdField,
    validateAddressField,
    validateInstagramField,
    validateYoutubeField,
    validateTikTokField,
    validateEmailField,
};
