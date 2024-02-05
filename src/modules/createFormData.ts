export default (object: Object): FormData => {
   const formData = new FormData();
   Object.entries(object).forEach(([key, value]) => {
      if (value === undefined || value === null || key === "image" || key === "video") return;
      console.log(`${key}: ${value}`);
      if (key === "newImage" || key === "newVideo") {
         let temp = key === "newImage" ? "image" : "video";
         formData.append(temp, value.rawFile);
      } else {
         formData.append(key, value);
      }
   });

   return formData;
};
