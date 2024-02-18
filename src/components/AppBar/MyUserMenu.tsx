import { UserMenu, useUserMenu, Logout,  MenuItemLink, usePermissions } from "react-admin";
import SettingsIcon from '@mui/icons-material/Settings';
import { ListItemIcon, ListItemText } from "@mui/material";

const MyUserMenu = () => {

 
const {permissions} = usePermissions();
  return (
    <UserMenu >
      { permissions === "ADMIN" ? <ConfigurationMenu  /> : null}
      <Logout />
    </UserMenu>
  );
};


const ConfigurationMenu = () => {
       const { onClose } = useUserMenu();
       return (
           <MenuItemLink
               to="/auth"
               onClick={onClose}
           >
               <ListItemIcon>
                   <SettingsIcon />
               </ListItemIcon>
               <ListItemText>Users</ListItemText>
           </MenuItemLink>
       );
   };
  


export default MyUserMenu;