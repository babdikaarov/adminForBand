import { SaveButton, Toolbar } from "react-admin";
import { useNavigate } from "react-router-dom";
import styles from "./saveToolBar.module.css"


const CustomSaveToolBar = () => {
   const navigate = useNavigate();
   return (
      <Toolbar >
         <SaveButton label="Save" />
         
         <button className={styles.button} type="button" onClick={() => navigate("../")}>
            Назад
         </button>
      </Toolbar>
   );
};

export default CustomSaveToolBar;
