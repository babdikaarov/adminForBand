export default (object: Object): FormData => {
   const formData = new FormData();
   Object.entries(object).forEach(([key, value]) => {
      if (value === undefined || value === null) return;
      console.log(`${key}: ${value}`);
      formData.append(key, value);
   });

   return formData;
};
