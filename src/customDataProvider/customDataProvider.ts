import {
   CreateParams,
   DataProvider,
   DeleteManyParams,
   DeleteParams,
   GetListParams,
   GetManyParams,
   // GetManyReferenceParams,
   GetOneParams,
   // UpdateManyParams,
   UpdateParams,
} from "react-admin";
import { getListAll } from "./getListAll";
import { getOne } from "./getOne";
import { getMany } from "./getMany";
import { getManyReference } from "./getManyReference";
import { create } from "./create";
import { updateOne } from "./updateOne";
import { updateMany } from "./updateMany";
import { deleteOne } from "./deleteOne";
import { deleteMany } from "./deleteMany";

const customDataProvider = (url: string): DataProvider => {
   return {
      getList: (resource: string, params: GetListParams) => getListAll(url, resource, params),

      // get a single record by id
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      getOne: (resource: string, params: GetOneParams<any>) => getOne(url, resource, params),

      // get a list of records based on an array of ids
      getMany: (resource: string, params: GetManyParams) => getMany(url, resource, params),

      // get the records referenced to another record, e.g. comments for a post
      // esling ignore
      // getManyReference: (resource: string, params: GetManyReferenceParams) => getManyReference(),
      getManyReference: () => getManyReference(),

      // create a record
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      create: (resource: string, params: CreateParams<any>) => create(url, resource, params),

      // update a record based on a patch
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      update: (resource: string, params: UpdateParams<any>) => updateOne(url, resource, params),

      // update a list of records based on an array of ids and a common patch
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      // eslint ignore
      updateMany: () => updateMany(),
      // updateMany: (resource: string, params: UpdateManyParams<any>) => updateMany(),

      // delete a record by id
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete: (resource: string, params: DeleteParams<any>) => deleteOne(url, resource, params),

      // delete a list of records based on an array of ids
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      deleteMany: (resource: string, params: DeleteManyParams<any>) => deleteMany(url, resource, params),
   };
};

export default customDataProvider;
