import { Menu } from "react-admin";
import { TreeItem } from "@mui/x-tree-view";
import StudioIcon from "./StudioIcon.svg";
import icons from "../../Resources/icons";
import { rcs } from "../../Resources/rcs";
import styles from "./styles";
import HandleNavigate  from "../../modules/HandleNavigate";


export const MenuStudio = () => {
  return (

<TreeItem
nodeId="2"
label={HandleNavigate("cool_studio")}
icon={<img src={StudioIcon} />}
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
{/* <Menu.Item
   to="event_studio_images"
   primaryText="Галерея"
   leftIcon={<icons.gallery />}
   sx={styles.item}
   
/>
<Menu.Item
   to="event_studio"
   primaryText="Коллаж"
   leftIcon={<icons.collage />}
   sx={styles.item}
   
/> */}
</TreeItem>

  )
}