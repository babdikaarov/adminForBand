// in src/MyMenu.js
import { Menu } from "react-admin";
import MenuBand from "./MenuBand";
import { MenuStudio } from "./MenuStudio";

export const MyMenu = () => {

    return (
        <Menu>
                <MenuBand />
                <MenuStudio />
               
        </Menu>
    );
};
