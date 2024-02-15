import { Admin, nanoLightTheme, nanoDarkTheme, Resource, CustomRoutes } from "react-admin";
import { Route } from "react-router-dom";
import authProvider from "./authProvider";
import { MyLayout } from "./components/Layout/MyLayout";
import { rcs } from "./Resources/rcs";
import BandPage from "./components/ReviewPage/ReviewPage";
import { dataProvider } from "./dataProvider";

const App = () => {
   // const token = JSON.parse(localStorage.user).token;
   // console.log(token);

   return (
      <Admin
         title="Cool Band Admin"
         dataProvider={dataProvider}
         authProvider={authProvider}
         layout={MyLayout}
         lightTheme={nanoLightTheme}
         darkTheme={nanoDarkTheme}
      >
         {/* Dashboard */}
         <CustomRoutes>
            <Route path="cool_band" element={<BandPage />} />
            <Route path="cool_studio" element={<BandPage />} />
         </CustomRoutes>
         {/* CoolStudio */}
         <Resource name="cool_band" /> {/* initial page */}

         <Resource 
            name={rcs.Studio.heroS.resource}
            list={<rcs.Studio.heroS.list />} 
            edit={<rcs.Studio.heroS.edit />} />
         <Resource
            name={rcs.Studio.aboutS.resource}
            list={<rcs.Studio.aboutS.list />}
            edit={<rcs.Studio.aboutS.edit />}
         />
         <Resource
            name={rcs.Studio.studentsStory.resource}
            list={<rcs.Studio.studentsStory.list />}
            create={<rcs.Studio.studentsStory.create />}
            edit={<rcs.Studio.studentsStory.edit />}
         />
         <Resource
            name={rcs.Studio.teacher.resource}
            list={<rcs.Studio.teacher.list />}
            create={<rcs.Studio.teacher.create />}
            edit={<rcs.Studio.teacher.edit />}
         />
         <Resource
            name={rcs.Studio.testimonials.resource}
            list={<rcs.Studio.testimonials.list />}
            create={<rcs.Studio.testimonials.create />}
            edit={<rcs.Studio.testimonials.edit />}
         // {...rcs.Studio.testimonials}
         />
         <Resource
            name={rcs.Studio.courses.resource}
            list={<rcs.Studio.courses.list />}
            create={<rcs.Studio.courses.create />}
            edit={<rcs.Studio.courses.edit />}
         />
         <Resource name="event_studio_images" list={<div>make ra-CRUD compoents</div>} />
         <Resource name="event_studio" list={<div>make ra-CRUD compoents</div>} />
         {/* CoolBand */}
         <Resource
            name={rcs.Band.partners.resource}
            list={<rcs.Band.partners.list />}
            create={<rcs.Band.partners.create />}
            edit={<rcs.Band.partners.edit />}
         />
         <Resource
            name={rcs.Band.heroB.resource}
            list={<rcs.Band.heroB.list />} edit={<rcs.Band.heroB.edit />} />
         <Resource
            name={rcs.Band.collaboration.resource}
            list={<rcs.Band.collaboration.list />}
            create={<rcs.Band.collaboration.create />}
            edit={<rcs.Band.collaboration.edit />}
         />
         <Resource
            name={rcs.Band.aboutB.resource}
            list={<rcs.Band.aboutB.list />}
            edit={<rcs.Band.aboutB.edit />}
         />
         <Resource
            name={rcs.Band.team.resource}
            list={<rcs.Band.team.list />}
            create={<rcs.Band.team.create />}
            edit={<rcs.Band.team.edit />}
         />


         <Resource
            name={rcs.Band.eventBand.resource}
            list={<rcs.Band.eventBand.list />}
            create={<rcs.Band.eventBand.create />}
            edit={<rcs.Band.eventBand.edit />}
         >
            {/* <Route path={":albumId/images"} element={<rcs.Band.eventBandImages.list />} /> */}
         </Resource>


         {/* Contacts */}
         <Resource
            name={rcs.Contacts.contacts.resource}
            list={<rcs.Contacts.contacts.list />}
            edit={<rcs.Contacts.contacts.edit />}
         />
      </Admin>
   );
};

export default App;
