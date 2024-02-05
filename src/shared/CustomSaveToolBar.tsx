import { SaveButton, Toolbar } from "react-admin";
import { useNavigate } from "react-router-dom";

interface CustomSaveToolBarProps {
   transform?: (data: any, options?: any) => FormData;
}

const CustomSaveToolBar: React.FC<CustomSaveToolBarProps> = () => {
   const navigate = useNavigate();
   return (
      <Toolbar>
         <SaveButton label="Save" />
         <div> postav style suda</div>
         <button type="button" onClick={() => navigate("../")}>
            Go back
         </button>
      </Toolbar>
   );
};

export default CustomSaveToolBar;
