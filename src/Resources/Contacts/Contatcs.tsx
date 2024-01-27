import { ContactsEdit } from "./ContactsEdit";
import { ContactsCreate } from "./ContactsCreate";
import { ContactsList } from "./ContactsList";

export default {
   resource: "contacts",
   list: ContactsList,
   create: ContactsCreate,
   edit: ContactsEdit,
};
