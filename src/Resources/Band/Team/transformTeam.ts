import processRawFile from "../../../modules/processRawFile";

export default (data: any) => {
   // Usage
   processRawFile(data, "image");
   processRawFile(data, "video");
   delete data.id;
   console.log(data);
   return data as FormData;
};
