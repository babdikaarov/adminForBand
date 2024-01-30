import { SaveButton, Toolbar } from "react-admin";

interface CustomSaveButtonProps {
   transform: (data: any) => FormData;
}

const CustomSaveButton: React.FC<CustomSaveButtonProps> = ({ transform }) => {
   return (
      <Toolbar>
         <SaveButton label="CustomSaveButton" transform={transform} type="button" />
      </Toolbar>
   );
};

export default CustomSaveButton;
