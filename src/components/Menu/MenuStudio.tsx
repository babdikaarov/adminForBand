import { Menu } from "react-admin";
import StudioIcon from "./StudioIcon.svg";
import icons from "../../Resources/icons";
import { rcs } from "../../Resources/rcs";
import styles from "./styles";

export const MenuStudio = () => {
    return (
       <>
            <Menu.Item
                to="cool_studio"
                primaryText="Cool Studio"
                leftIcon={<img src={StudioIcon}></img>}
                sx={styles.treeView}
            />
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
                to="contacts"
                primaryText="Контакты"
                leftIcon={<icons.contacts />}
                sx={styles.treeView}
            />
             </>

    );
};
