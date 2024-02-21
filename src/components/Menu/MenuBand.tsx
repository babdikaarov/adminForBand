import { Menu } from "react-admin";
import BandIcon from "./BandIcon.svg";
import icons from "../../Resources/icons";
import { rcs } from "../../Resources/rcs";
import styles from "./styles";

const MenuBand = () => {
    return (
        <>
            <Menu.Item
                to="cool_band"
                primaryText="Cool Band"
                leftIcon={<img src={BandIcon} />}
                sx={styles.treeView}
            />
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
            <Menu.Item
                to={rcs.Band.gallery.resource}
                primaryText="Галерея"
                leftIcon={<icons.gallery />}
                sx={styles.item}
            />
        </>
    );
};

export default MenuBand;
