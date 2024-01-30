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

export const MyMenu = () => {
   const navigate = useNavigate();
   const style = {
      treeView: {
         height: "auto",
         flexGrow: 1,
         maxWidth: 400,
         overflowY: "auto",
         textWrap: "nowrap",
         fontSize: "24px",
         fontWeight: 700,
      },
      item: { color: "inherit", marginLeft: "-15px" },
      contacts: {
         color: "inherit",
         fontSize: "24px",
         fontWeight: 700,
      },
   };

   //
   const handleClick = (text: string) => {
      // FIX_ME wardprope behavior

      return (
         <div onClick={() => navigate(`/${text}`)}>
            {text
               .split("_")
               .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
               .join(" ")}
         </div>
      );
   };
   return (
      <Menu>
         <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={style.treeView}
         >
            <TreeItem nodeId="0" label={handleClick("cool_band")} icon={<img src={BandIcon} />}>
               {/* Cool Band*/}
               <Menu.Item to="hero_band" primaryText="Баннер" leftIcon={<icons.hero />} sx={style.item} disabled />
               <Menu.Item to="about_us_band" primaryText="О нас" leftIcon={<icons.about />} sx={style.item} disabled />
               <Menu.Item
                  to="team_band"
                  primaryText="Наша команда"
                  leftIcon={<icons.team />}
                  sx={style.item}
                  disabled
               />
               <Menu.Item
                  to="partners_band"
                  primaryText="Наши Клиенты"
                  leftIcon={<icons.partners />}
                  sx={style.item}
                  disabled
               />
               <Menu.Item
                  to="collaborations_band"
                  primaryText="Коллаборации"
                  leftIcon={<icons.collaboration />}
                  sx={style.item}
                  disabled
               />
               {/* sdelali static whyus */}
               {/* <Menu.Item to="why_us_band" primaryText="Почему нас" leftIcon={<icons.about />} sx={style.item} /> */}
               <Menu.Item
                  to="event_images"
                  primaryText="Галерея"
                  leftIcon={<icons.gallery />}
                  sx={style.item}
                  disabled
               />
               <Menu.Item to="event_band" primaryText="Коллаж" leftIcon={<icons.collage />} sx={style.item} disabled />
            </TreeItem>

            <TreeItem nodeId="2" label={handleClick("cool_studio")} icon={<img src={StudioIcon} />}>
               {/*  CoolStudio  */}
               <Menu.Item to="hero_studio" primaryText="Баннер" leftIcon={<icons.hero />} sx={style.item} disabled />
               <Menu.Item
                  to={rcs.Studio.aboutS.resource}
                  primaryText="О нас"
                  leftIcon={<icons.about />}
                  sx={style.item}
               />
               <Menu.Item
                  to="direction"
                  primaryText="Наши Курсы"
                  leftIcon={<icons.courses />}
                  sx={style.item}
                  disabled
               />
               <Menu.Item
                  to="st_teachers"
                  primaryText="Преподаватели"
                  leftIcon={<icons.teacher />}
                  sx={style.item}
                  disabled
               />
               <Menu.Item
                  to="st_student_reviews"
                  primaryText="Отзывы учеников"
                  leftIcon={<icons.testimonails />}
                  sx={style.item}
                  disabled
               />
               <Menu.Item
                  to="student_success_studio"
                  primaryText="Успехи студентов"
                  leftIcon={<icons.success />}
                  sx={style.item}
                  disabled
               />
               <Menu.Item
                  to="event_studio_images"
                  primaryText="Галерея"
                  leftIcon={<icons.gallery />}
                  sx={style.item}
                  disabled
               />
               <Menu.Item
                  to="event_studio"
                  primaryText="Коллаж"
                  leftIcon={<icons.collage />}
                  sx={style.item}
                  disabled
               />
            </TreeItem>
            <Menu.Item
               to={rcs.Contacts.contacts.resource}
               primaryText="Контакты"
               leftIcon={<icons.contacts />}
               sx={style.contacts}
            />
         </TreeView>
      </Menu>
   );
};
