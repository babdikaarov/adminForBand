export const handlePreview = (value: any) => {
   return typeof value === "string" ? { src: "" } : value;
};
