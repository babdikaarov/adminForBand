import {
	Admin,
	// nanoLightTheme,
	nanoDarkTheme,
	Resource,
	CustomRoutes,
} from 'react-admin';
import { Route } from 'react-router-dom';
// import authProvider from "./authProvider";
import { MyLayout } from './components/Layout/MyLayout';
import customDataProvider from './customDataProvider/customDataProvider';
import { rcs } from './Resources/rcs';
import BandPage from './components/ReviewPage/ReviewPage';
import icons from './Resources/icons';

const App = () => {
	// const token = JSON.parse(localStorage.user).token;
	// console.log(token);

	return (
		<Admin
			title='My Cool Admin'
			dataProvider={customDataProvider(import.meta.env.VITE_COOL_API)}
			// authProvider={authProvider}
			layout={MyLayout}
			// theme={nanoLightTheme}
			darkTheme={nanoDarkTheme}>
			{/* CoolStudio */}

			<Resource
				name='hero_studio'
				list={<rcs.Studio.heroS.list />}
				create={<rcs.Studio.heroS.create />}
				edit={<rcs.Studio.heroS.edit />}
				icon={icons.hero}
			/>
			<Resource
				name='about_us'
				list={<rcs.Studio.aboutS.list />}
				create={<rcs.Studio.aboutS.create />}
				edit={<rcs.Studio.aboutS.edit />}
				icon={icons.about}
			/>
			<Resource
				name='student_success_studio'
				list={<rcs.Studio.studentsStory.list />}
				create={<rcs.Studio.studentsStory.create />}
				edit={<rcs.Studio.studentsStory.edit />}
				icon={icons.success}
			/>
			<Resource
				name='st_teachers'
				list={<rcs.Studio.teacher.list />}
				create={<rcs.Studio.teacher.create />}
				edit={<rcs.Studio.teacher.edit />}
				icon={icons.teacher}
			/>
			<Resource
				name='st_student_reviews'
				list={<rcs.Studio.testimonials.list />}
				create={<rcs.Studio.testimonials.create />}
				edit={<rcs.Studio.testimonials.edit />}
				icon={icons.testimonails}
			/>
			<Resource
				name='direction'
				list={<rcs.Studio.courses.list />}
				create={<rcs.Studio.courses.create />}
				edit={<rcs.Studio.courses.edit />}
				icon={icons.courses}
			/>
			<Resource
				name='event_studio_images'
				list={<div>make ra-CRUD compoents</div>}
				icon={icons.collage}
			/>
			<Resource
				name='event_studio'
				list={<div>make ra-CRUD compoents</div>}
				icon={icons.gallery}
			/>

			{/* CoolBand */}
			<Resource
				name='partners_band'
				list={<rcs.Band.partners.list />}
				create={<rcs.Band.partners.create />}
				edit={<rcs.Band.partners.edit />}
				icon={icons.partners}
			/>
			<Resource
				name='hero_band'
				list={<rcs.Band.heroB.list />}
				create={<rcs.Band.heroB.create />}
				edit={<rcs.Band.heroB.edit />}
				icon={icons.hero}
			/>

			<Resource
				name='contacts_band'
				list={<rcs.Band.contacts.list />}
				create={<rcs.Band.contacts.create />}
				edit={<rcs.Band.contacts.edit />}
				icon={icons.contacts}
			/>
			<Resource
				name='collaborations_band'
				list={<rcs.Band.collaboration.list />}
				create={<rcs.Band.collaboration.create />}
				edit={<rcs.Band.collaboration.edit />}
				icon={icons.collaboration}
			/>
			<Resource
				name='about_us_band'
				list={<rcs.Band.aboutB.list />}
				create={<rcs.Band.aboutB.create />}
				edit={<rcs.Band.aboutB.edit />}
				icon={icons.about}
			/>
			<Resource
				name='why_us_band'
				list={<rcs.Band.whyUs.list />}
				create={<rcs.Band.whyUs.create />}
				edit={<rcs.Band.whyUs.edit />}
				icon={icons.whyUs}
			/>
			<Resource
				name='team_band'
				list={<rcs.Band.team.list />}
				create={<rcs.Band.team.create />}
				edit={<rcs.Band.team.edit />}
				icon={icons.whyUs}
			/>

			<Resource
				name='event_images'
				list={<div>make ra-CRUD compoents</div>}
				icon={icons.collage}
			/>
			<Resource
				name='event_band'
				list={<div>make ra-CRUD compoents</div>}
				icon={icons.gallery}
			/>
			{/* Dashboard */}
			<CustomRoutes>
				<Route
					path='cool_show_band'
					element={<BandPage />}
				/>
				<Route
					path='cool_studio'
					element={<BandPage />}
				/>
			</CustomRoutes>
		</Admin>
	);
};

export default App;
