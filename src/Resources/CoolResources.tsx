import { CustomRoutes, Resource } from "react-admin";
import { rcs } from "./rcs";
import { Route } from "react-router-dom";
import BandPage from "../components/ReviewPage/ReviewPage";
import icons from "./icons";
const CoolResources = () => {
  return (
    <>
      {/* CoolStudio */}
      <Resource
        name="hero_studio"
        list={<rcs.Studio.heroS.list />}
        create={<rcs.Studio.heroS.create />}
        edit={<rcs.Studio.heroS.edit />}
      />
      <Resource
        name="about_us"
        list={<rcs.Studio.aboutS.list />}
        create={<rcs.Studio.aboutS.create />}
        edit={<rcs.Studio.aboutS.edit />}
      />
      <Resource
        name="student_success_studio"
        list={<rcs.Studio.studentsStory.list />}
        create={<rcs.Studio.studentsStory.create />}
        edit={<rcs.Studio.studentsStory.edit />}
      />
      <Resource
        name="st_teachers"
        list={<rcs.Studio.teacher.list />}
        create={<rcs.Studio.teacher.create />}
        edit={<rcs.Studio.teacher.edit />}
      />
      <Resource
        name="st_student_reviews"
        list={<rcs.Studio.testimonials.list />}
        create={<rcs.Studio.testimonials.create />}
        edit={<rcs.Studio.testimonials.edit />}
      />
      <Resource
        name="direction"
        list={<rcs.Studio.courses.list />}
        create={<rcs.Studio.courses.create />}
        edit={<rcs.Studio.courses.edit />}
      />
      <Resource name="event_studio_images" list={<div>make ra-CRUD compoents</div>} />
      <Resource name="event_studio" list={<div>make ra-CRUD compoents</div>} />

      {/* CoolBand */}
      <Resource
        name="partners_band"
        list={<rcs.Band.partners.list />}
        create={<rcs.Band.partners.create />}
        edit={<rcs.Band.partners.edit />}
        icon={icons.HandshakeSharpIcon}
      />
      <Resource
        name="hero_band"
        list={<rcs.Band.heroB.list />}
        create={<rcs.Band.heroB.create />}
        edit={<rcs.Band.heroB.edit />}
      />

      <Resource
        name="contacts_band"
        list={<rcs.Band.contacts.list />}
        create={<rcs.Band.contacts.create />}
        edit={<rcs.Band.contacts.edit />}
      />
      <Resource
        name="collaborations_band"
        list={<rcs.Band.collaboration.list />}
        create={<rcs.Band.collaboration.create />}
        edit={<rcs.Band.collaboration.edit />}
      />
      <Resource
        name="about_us_band"
        list={<rcs.Band.aboutB.list />}
        create={<rcs.Band.aboutB.create />}
        edit={<rcs.Band.aboutB.edit />}
      />
      <Resource
        name="why_us_band"
        list={<rcs.Band.whyUs.list />}
        create={<rcs.Band.whyUs.create />}
        edit={<rcs.Band.whyUs.edit />}
      />
      <Resource
        name="team_band"
        list={<rcs.Band.team.list />}
        create={<rcs.Band.team.create />}
        edit={<rcs.Band.team.edit />}
      />

      <Resource name="event_images" list={<div>make ra-CRUD compoents</div>} />
      <Resource name="event_band" list={<div>make ra-CRUD compoents</div>} />
      {/* Dashboard */}
      <CustomRoutes>
        <Route path="cool_show_band" element={<BandPage />} />
        <Route path="cool_studio" element={<div>make doashboard for CS</div>} />
      </CustomRoutes>
    </>
  );
};

export default CoolResources;
