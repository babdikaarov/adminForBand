export default (data: any) => {
   const formData = new FormData();
   formData.append("orientation", data.orientation);
   formData.append("image", data.image.rawFile);
   formData.append("video", data.video.rawFile);
   return formData;
};
