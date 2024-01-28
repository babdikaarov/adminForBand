// import { ResourceCallbacks, GetListResult } from "react-admin";

// export const contactsCallBack: ResourceCallbacks = {
//    resource: "contacts",
//    //    afterRead: async (record) => {
//    //       //   console.log(record);
//    //       // If you want to return an array, you can modify the record here
//    //       //   return [record];
//    //    },
//    afterGetList: async (record: GetListResult) => {
//       //   delete rest.id;
//       const formatContacts = {
//          data: [
//             {
//                id: record.id,
//                contacts: [record],
//             },
//          ],
//       };
//       console.log(formatContacts);
//       return formatContacts;
//    },
// };
