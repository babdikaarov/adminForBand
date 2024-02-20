import { EventBandCreate } from "./EventBandCreate";
import { EventBandEdit } from "./EventBandEdit";
import { EventBandList } from "./EventBandList";
import { ImageEdit } from "./image/ImageEdit";

export default {
    resource: "event_band",
    resource2: "event_band_images",
    resource3: "album",
    list: EventBandList,
    edit: EventBandEdit,
    create: EventBandCreate,
    ImageEdit: ImageEdit,
};
