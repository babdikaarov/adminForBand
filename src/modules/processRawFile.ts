// @ts-ignore
const processRawFile = (data, key) => {
   if (typeof data[key] === "string" || data[key] === undefined || data[key] === null) {
      data[key] = null;
   } else {
      data[key] = data[key].rawFile;
   }
};

export default processRawFile;
