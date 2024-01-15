import { Layout, LayoutProps } from "react-admin";
import { ReactQueryDevtools } from "react-query/devtools";
import { MyMenu } from "./MyMenu";
import { MyAppBar } from "./MyAppBar";

export const DevtoolsLayout = (props: LayoutProps) => (
  <>
    <Layout {...props} menu={MyMenu} appBar={MyAppBar} />
    <ReactQueryDevtools initialIsOpen={false} />
  </>
);
