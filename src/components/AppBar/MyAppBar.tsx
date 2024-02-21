import { AppBar, LoadingIndicator, TitlePortal, ToggleThemeButton } from "react-admin";
import MyUserMenu from "./MyUserMenu";
export const MyAppBar = () => (
    // create userMenu https://marmelab.com/blog/2020/12/14/react-admin-v3-userprofile.html
    <AppBar
        userMenu={<MyUserMenu />}
        toolbar={
            <>
                <ToggleThemeButton />
                <LoadingIndicator />
            </>
        }
    >
        <TitlePortal />
    </AppBar>
);
