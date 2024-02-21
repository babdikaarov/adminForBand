import { EventStudioCreate } from "./EventStudioCreate";
import { EventStudioEdit } from "./EventStudioEdit";
import { EventStudioList } from "./EventStudioList";
import { ImageEdit } from "./image/ImageEdit";

export default {
    resource: "event_studio",
    resource2: "event_studio_images",
    resource3: "album",
    list: EventStudioList,
    edit: EventStudioEdit,
    create: EventStudioCreate,
    ImageEdit: ImageEdit,
};
