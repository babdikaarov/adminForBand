import { SelectInput } from "react-admin";

const CustomSelectInput = () => {
   return (
      <SelectInput
         source="orientation"
         choices={[
            /* big lettere ENUM */
            { _orientation: "LANDSCAPE", name: "Портретная" },
            { _orientation: "PORTRAIT", name: "Альбомная" },
         ]}
         optionValue="_orientation"
         defaultValue={() => ({ orientation: "portrait" })}
         label="Фотография"
      />
   );
};

export default CustomSelectInput;
