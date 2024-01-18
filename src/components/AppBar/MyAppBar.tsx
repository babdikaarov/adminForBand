import { AppBar, LoadingIndicator, TitlePortal, ToggleThemeButton } from "react-admin";
export const MyAppBar = () => (
  <AppBar
    toolbar={
      <>
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
