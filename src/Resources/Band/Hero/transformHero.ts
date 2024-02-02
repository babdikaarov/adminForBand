import processRawFile from "../../../modules/processRawFile";

export default (data: any) => {
   processRawFile(data, "video");
   // data.orientation = "LANDSCAPE";
   delete data.id;
   console.log(data);
   return data as FormData;
};
