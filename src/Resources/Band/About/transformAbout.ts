export default (data: any) => {
   data.image = data.image.rawFile;
   delete data.id;
   return data as FormData;
};
