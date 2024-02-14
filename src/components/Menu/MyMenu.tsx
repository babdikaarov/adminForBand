// in src/MyMenu.js
import { Menu } from "react-admin";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeView, TreeItem } from "@mui/x-tree-view";
import icons from "../../Resources/icons";
import styles from "./styles";
import MenuBand from "./MenuBand";
import { MenuStudio } from "./MenuStudio";
import { useNavigate } from "react-router-dom";

export const MyMenu = () => {
   const navigate = useNavigate();

   return (
      <Menu>
         <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={styles.treeView}
            >
            <MenuBand />
            <MenuStudio />
            <TreeItem nodeId="3" label="Контакты" icon={<icons.contacts />} onClick={() => navigate("/contacts")} />
         </TreeView>
      </Menu>
   );
};
