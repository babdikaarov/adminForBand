import { Layout, LayoutProps } from "react-admin";
import { MyMenu } from "../Menu/MyMenu";
import { MyAppBar } from "../AppBar/MyAppBar";

export const MyLayout = (props: LayoutProps) => (
    <>
        <Layout
            {...props}
            menu={MyMenu}
            appBar={MyAppBar}
            appBarAlwaysOn
        />
    </>
);
