import processRawFile from "../../../modules/processRawFile";
/*
 */
export default (data: any) => {
   processRawFile(data, "video");
   data.bluer = " mojno ubrat etot klu4 on tolko dlya photographii nujen ";
   data.orientation = "PORTRAIT";
   delete data.id;
   console.log(data);
   /* 
     "title": "string",
  "text": "string",
  "video": "string",
  "bluer": "string",
  "orientation": "PORTRAIT"
   */
   return data as FormData;
};
