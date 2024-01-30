export default (
   data: any,
   options?:
      | {
           previousData: any;
        }
      | undefined,
) => {
   const prevData = options?.previousData;
   //    console.log(data);
   //    console.log(prevData);
   const formData = new FormData();
   formData.append("orientation", data.orientation);
   data.image === prevData.image ? formData.append("image", data.image) : formData.append("image", data.image.rawFile);
   data.video === prevData.video ? formData.append("video", data.video) : formData.append("video", data.video.rawFile);

   for (const pair of formData.entries()) {
      console.log(pair);
   }
   return formData;
};
