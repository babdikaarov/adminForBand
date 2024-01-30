export default (
   data: any,
   options?:
      | {
           previousData: any;
        }
      | undefined,
) => {
   // const prevData = options?.previousData;

   // console.log(data);
   // console.log(prevData);
   const formData = new FormData();
   formData.append("orientation", data.orientation);
   formData.append("image", data.image.rawFile);
   formData.append("video", data.video.rawFile);
   return formData;
   // for (const pair of formData.entries()) {
   //    console.log(pair);
   // }
   // return formData;
};
