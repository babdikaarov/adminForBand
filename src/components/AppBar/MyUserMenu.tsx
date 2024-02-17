import { MenuItem } from "@mui/material";
import { UserMenu, Logout, useUserMenu, MenuItemLink } from "react-admin";
import icons from "../../Resources/icons";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import ListItemText from "@mui/material/ListItemText/ListItemText";

const MyUserMenu = () => {
  return (
    <UserMenu>
        
      <MenuItemLink
      to="users"
      primaryText="Profile"
      leftIcon={<icons.settings />}
      >
      </MenuItemLink>
      <Logout />
    </UserMenu>
  );
};

export default MyUserMenu;