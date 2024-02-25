import { CollaborationList } from "./CollaborationList";
import { CollaborationCreate } from "./CollaborationCreate";
import { CollaborationEdit } from "./CollaborationEdit";

export default {
    resource: "collaborations_band",
    list: CollaborationList,
    create: CollaborationCreate,
    edit: CollaborationEdit,
};
