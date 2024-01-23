export default function hasFormDataValue(obj: Record<string, any>): boolean {
   for (const key in obj) {
      if (obj[key] instanceof FormData) {
         return true;
      }
      // Check if the property is an object and then check its properties
      if (typeof obj[key] === "object" && obj[key] !== null) {
         for (const innerKey in obj[key]) {
            // Check if the inner property is an instance of FormData
            if (obj[key][innerKey] instanceof FormData) {
               return true;
            }
         }
      }
   }
   return false;
}
