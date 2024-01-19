import { List, Datagrid, TextField, ImageField, EditButton, DeleteButton, SaveButton } from 'react-admin';
import { Create, Edit, SimpleForm, TextInput, ImageInput } from 'react-admin';

export const AboutList = () => {
	return (
		<List
			title='Studio About Us'
			hasCreate={true}
		>
			{/* <CreateButton /> */}
			<Datagrid>
				<TextField source='id' />
				<TextField
					source='filename'
					title='name'
				/>
				<ImageField
					source='filename'
					title='image'
				/>
				<EditButton />
				<DeleteButton />
			</Datagrid>
		</List>
	);
};

export const AboutCreate = () => {
	// const postDefaultValue = () => ({ id: uuid(), created_at: new Date(), nb_views: 0 });
	return (
		<Create title='Studio About Us - create'>
			{/* <SimpleForm toolbar={<SaveButton />} defaultValues={postDefaultValue}> */}
			<SimpleForm toolbar={<SaveButton />}>
				<TextInput
					source='id'
					disabled
				/>
				<ImageInput
					source='filename'
					label='image'
				>
					<ImageField
						source='src'
						title='title'
					/>
				</ImageInput>
			</SimpleForm>
		</Create>
	);
};

export const AboutEdit = () => {
	return (
		<Edit title='Studio About Us - edit'>
			<SimpleForm toolbar={<SaveButton />}>
				<TextInput
					disabled
					source='id'
				/>
				<TextInput source='name' />
				<ImageInput source='img' />
			</SimpleForm>
		</Edit>
	);
};

export default {
	list: AboutList,
	create: AboutCreate,
	edit: AboutEdit,
};
