import { AppBar, LoadingIndicator, LocalesMenuButton, TitlePortal, ToggleThemeButton } from "react-admin";
export const MyAppBar = () => (
  <AppBar
    open={true}
    toolbar={
      <>
        {/* <LocalesMenuButton /> */}
        <ToggleThemeButton />
        <LoadingIndicator />
      </>
    }
  >
    <TitlePortal />
    {/* <Toolbar> */}
    {/* <Box flex="1" /> */}
    {/* <RefreshIconButton /> */}
    {/* </Toolbar> */}
    {/* <ToggleThemeButton /> */}
  </AppBar>
);
