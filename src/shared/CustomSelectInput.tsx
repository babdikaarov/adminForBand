import { useState } from "react";
import { RadioButtonGroupInput, useRecordContext } from "react-admin";

const CustomSelectInput = () => {
   const record = useRecordContext();
   const defaultValue = record ? record.orientation : "PORTRAIT";
   const [value, setValue] = useState<string>(defaultValue);

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue((event.target as HTMLInputElement).value);
   };
   const choices = [
      { id: "PORTRAIT", name: "Портретная" },
      { id: "LANDSCAPE", name: "Альбомная" },
   ];

   // useEffect(() => {
   //    console.log(value);
   // }, [value]);

   console.log();
   return (
      <RadioButtonGroupInput
         source="orientation"
         choices={choices}
         label="Фотография"
         value={value}
         onChange={handleChange}
         defaultChecked={true}
         defaultValue={defaultValue}
      />
   );
};

export default CustomSelectInput;
