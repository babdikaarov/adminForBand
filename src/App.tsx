import { Admin, Resource, ListGuesser, useRedirect, nanoLightTheme, nanoDarkTheme, CustomRoutes } from "react-admin";
import dataProvider from "./dataProvider";
// import authProvider from "./authProvider";
import { DevtoolsLayout } from "./components/temp/DevtoolsLayout";
import { List, Datagrid, TextField, ReferenceField, EditButton } from "react-admin";
import { Route } from "react-router-dom";

const App = () => (
  <Admin
    title="My Cool Admin"
    dataProvider={dataProvider}
    layout={DevtoolsLayout}
    theme={nanoLightTheme}
    darkTheme={nanoDarkTheme}
  >
    <Resource name="posts" list={PostList} />
    <Resource name="comments" list={ListGuesser} />
    <Resource name="team_band" list={<div>make ra-CRUD compoents</div>} />
    <Resource name="student_success_studio" list={<div>make ra-CRUD compoents</div>} />
    <Resource name="st_teachers" list={<div>make ra-CRUD compoents</div>} />
    <Resource name="st_student_reviews" list={<div>make ra-CRUD compoents</div>} />
    <Resource name="partners_band" list={<div>make ra-CRUD compoents</div>} />
    <Resource name="hero_studio" list={<div>make ra-CRUD compoents</div>} />
    <Resource name="hero_band" list={<div>make ra-CRUD compoents</div>} />
    <Resource name="event_studio_images" list={<div>make ra-CRUD compoents</div>} />
    <Resource name="event_studio" list={<div>make ra-CRUD compoents</div>} />
    <Resource name="event_images" list={<div>make ra-CRUD compoents</div>} />
    <Resource name="event_band" list={<div>make ra-CRUD compoents</div>} />
    <Resource name="direction" list={<div>make ra-CRUD compoents</div>} />
    <Resource name="contacts_band" list={<div>make ra-CRUD compoents</div>} />
    <Resource name="collaborations_band" list={<div>make ra-CRUD compoents</div>} />
    <Resource name="about_us" list={<div>textAboutUs</div>} />
    <Resource name="about_us_band" list={<div>textAbout</div>} />
    <CustomRoutes>
      <Route path="cool_show_band" element={<div>make doashboard for Band</div>} />
      <Route path="cool_show_band" element={<div>make doashboard for Band</div>} />
      <Route path="cool_studio" element={<div>make doashboard for CS</div>} />
    </CustomRoutes>
  </Admin>
);

export default App;

// temp
export const PostList = () => {
  const redirect = useRedirect();
  const handleClick = () => {
    redirect("/comments");
  };
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <div onClick={handleClick}>delete me after dev mode : click to other reaosure</div>
        <ReferenceField source="user_id" reference="users" />
        <TextField source="title" />
        <EditButton />
      </Datagrid>
    </List>
  );
};
