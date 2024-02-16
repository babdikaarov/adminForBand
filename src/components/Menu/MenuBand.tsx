import { Menu } from "react-admin";
import { TreeItem } from "@mui/x-tree-view";
import BandIcon from "./BandIcon.svg";
import icons from "../../Resources/icons";
import { rcs } from "../../Resources/rcs";
import styles from "./styles";
import HandleNavigate from "../../modules/HandleNavigate";


const MenuBand = () => {
  return (
    <TreeItem
    nodeId="0"
    label={HandleNavigate("cool_band")}
    icon={<img src={BandIcon} />}
 >
    {/* Cool Band*/}
    <Menu.Item
       to={rcs.Band.heroB.resource}
       primaryText="Баннер"
       leftIcon={<icons.hero />}
       sx={styles.item}
    />
    <Menu.Item
       to={rcs.Band.aboutB.resource}
       primaryText="О нас"
       leftIcon={<icons.about />}
       sx={styles.item}
    />
    <Menu.Item
       to={rcs.Band.team.resource}
       primaryText="Наша команда"
       leftIcon={<icons.team />}
       sx={styles.item}
    />
    <Menu.Item
       to={rcs.Band.partners.resource}
       primaryText="Наши Клиенты"
       leftIcon={<icons.partners />}
       sx={styles.item}
    />
    <Menu.Item
       to={rcs.Band.collaboration.resource}
       primaryText="Коллаборации"
       leftIcon={<icons.collaboration />}
       sx={styles.item}
       
    />
   
  
 </TreeItem>
  )
};

export default MenuBand;
