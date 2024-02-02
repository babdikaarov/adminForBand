import { SaveButton, Toolbar } from "react-admin";
import { useNavigate } from "react-router-dom";

interface CustomSaveButtonProps {
   transform?: (data: any, options?: any) => FormData;
}

const CustomSaveButton: React.FC<CustomSaveButtonProps> = ({ transform }) => {
   const navigate = useNavigate();
   return (
      <Toolbar>
         {/* <SaveButton label="CustomSaveButton" transform={transform} type="button" /> */}
         <SaveButton label="SaveButton" />
         <div> postav style suda</div>
         <button type="button" onClick={() => navigate("../")}>
            Go back
         </button>
      </Toolbar>
   );
};

export default CustomSaveButton;
