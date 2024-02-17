import { UserMenu, useUserMenu, Logout,  MenuItemLink } from "react-admin";
import SettingsIcon from '@mui/icons-material/Settings';
import { ListItemIcon, ListItemText } from "@mui/material";

const MyUserMenu = () => {

 

  return (
    <UserMenu >
      <ConfigurationMenu  />
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