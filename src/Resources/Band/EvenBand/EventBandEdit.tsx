import {
    Datagrid,
    DateField,
    Edit,
    EditButton,
    Pagination,
    ReferenceManyField,
    ReferenceManyCount,
    required,
    TabbedForm,
    TextField,
    TextInput,
    useRecordContext,
} from 'react-admin';
import { AlbumEditTab } from './AlbumEditTab';

// import { ProductEditDetails } from './ProductEditDetails';
// import CustomerReferenceField from '../visitors/CustomerReferenceField';
// import StarRatingField from '../reviews/StarRatingField';
// import Poster from './Poster';
// import { Product } from '../types';
// import CreateRelatedReviewButton from './CreateRelatedReviewButton';

// const RichTextInput = React.lazy(() =>
//     import('ra-input-rich-text').then(module => ({
//         default: module.RichTextInput,
//     }))
// );

const ProductTitle = () => {
    const record = useRecordContext();
    return record ? <span>Poster "{record.reference}"</span> : null;
};

export const EventBandEdit = () => (
    <Edit title={<ProductTitle />}>
        <TabbedForm>

            <TabbedForm.Tab
                label="resources.products.tabs.details"
                path="details"
                sx={{ maxWidth: '40em' }}
            >
                <AlbumEditTab />
            </TabbedForm.Tab>


         
            <TabbedForm.Tab
                label="resources.products.tabs.reviews"
                count={
                    <ReferenceManyCount
                        reference="reviews"
                        target="product_id"
                        sx={{ lineHeight: 'inherit' }}
                    />
                }
                path="reviews"
            >
                <ReferenceManyField
                    reference="reviews"
                    target="product_id"
                    pagination={<Pagination />}
                >
                    <Datagrid
                        sx={{
                            width: '100%',
                            '& .column-comment': {
                                maxWidth: '20em',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                            },
                        }}
                    >
                        <DateField source="date" />
                        <CustomerReferenceField />
                        <StarRatingField />
                        <TextField source="comment" />
                        <TextField source="status" />
                        <EditButton />
                    </Datagrid>
                    <CreateRelatedReviewButton />
                </ReferenceManyField>


            </TabbedForm.Tab>
        </TabbedForm>
    </Edit>
);

const req = [required()];


// import { DateInput, Edit, SimpleForm, TextInput } from "react-admin";
// import CustomSaveToolBar from "../../../shared/CustomSaveToolBar";

// export const EventBandEdit = () => {

//    /* 
//    {
//   "date": "2024-02-13",
//   "name": "string"
// }
//    */

//    return (
//       <Edit title="Coll Band → Альбомы → изменить Альбом" redirect="list">
//          <SimpleForm toolbar={<CustomSaveToolBar />}>
//          <TextInput source="id" disabled/>
//          <TextInput source="name" />
//          <DateInput source="date" />
//          </SimpleForm>
//       </Edit>
//    );
// };
