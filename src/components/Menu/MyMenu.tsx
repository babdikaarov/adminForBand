// in src/MyMenu.js
import { Menu } from "react-admin";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeView, TreeItem } from "@mui/x-tree-view";
import BandIcon from "./BandIcon.svg";
import StudioIcon from "./StudioIcon.svg";
import { useNavigate } from "react-router-dom";
import icons from "../../Resources/icons";
import { rcs } from "../../Resources/rcs";
import styles from "./styles";
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
            <TreeItem
               nodeId="0"
               label={"Cool Band"}
               icon={<img src={BandIcon} />}
               onClick={() => navigate("/cool_band")}
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
               {/* sdelali static whyus */}
               {/* <Menu.Item to="why_us_band" primaryText="Почему нас" leftIcon={<icons.about />} sx={styles.item} /> */}
               <Menu.Item
                  to="event_images"
                  primaryText="Галерея"
                  leftIcon={<icons.gallery />}
                  sx={styles.item}
                  disabled
               />
               <Menu.Item to="event_band" primaryText="Коллаж" leftIcon={<icons.collage />} sx={styles.item} disabled />
            </TreeItem>

            <TreeItem
               nodeId="2"
               label={"Cool Studio"}
               icon={<img src={StudioIcon} />}
               onClick={() => navigate("/cool_studio")}
            >
               {/*  CoolStudio  */}
               <Menu.Item
                  to={rcs.Studio.heroS.resource}
                  primaryText="Баннер"
                  leftIcon={<icons.hero />}
                  sx={styles.item}
               />
               <Menu.Item
                  to={rcs.Studio.aboutS.resource}
                  primaryText="О нас"
                  leftIcon={<icons.about />}
                  sx={styles.item}
               />
               <Menu.Item
                  to={rcs.Studio.courses.resource}
                  primaryText="Наши Курсы"
                  leftIcon={<icons.courses />}
                  sx={styles.item}
               />
               <Menu.Item
                  to={rcs.Studio.teacher.resource}
                  primaryText="Преподаватели"
                  leftIcon={<icons.teacher />}
                  sx={styles.item}
               />
               <Menu.Item
                  to={rcs.Studio.testimonials.resource}
                  primaryText="Отзывы учеников"
                  leftIcon={<icons.testimonails />}
                  sx={styles.item}
               />
               <Menu.Item
                  to={rcs.Studio.studentsStory.resource}
                  primaryText="Успехи студентов"
                  leftIcon={<icons.success />}
                  sx={styles.item}
               />
               <Menu.Item
                  to="event_studio_images"
                  primaryText="Галерея"
                  leftIcon={<icons.gallery />}
                  sx={styles.item}
                  disabled
               />
               <Menu.Item
                  to="event_studio"
                  primaryText="Коллаж"
                  leftIcon={<icons.collage />}
                  sx={styles.item}
                  disabled
               />
            </TreeItem>

            {/* Can not choose between => TreeItem : Menu.Item*/}

            <TreeItem nodeId="3" label="Контакты" icon={<icons.contacts />} onClick={() => navigate("/contacts")} />

            {/* <Menu.Item
               to={rcs.Contacts.contacts.resource}
               primaryText="Контакты"
               leftIcon={<icons.contacts />}
               sx={styles.contacts}
            /> */}
         </TreeView>
      </Menu>
   );
};
