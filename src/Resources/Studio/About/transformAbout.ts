export default (data: any, options: any) => {
   // console.log(options);
   // console.log(data);
   data.image = data.image.rawFile;
   delete data.id;
   //    console.log(data);
   return data as FormData;
};
