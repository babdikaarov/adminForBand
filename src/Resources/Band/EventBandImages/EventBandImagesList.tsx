import { BooleanField, ChipField, Datagrid, DeleteButton, Link, List, TextField, useRecordContext } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";
// import { useLocation } from "react-router-dom";
import { rcs } from "../../rcs";
import { Button } from '@mui/material';

const EventBandImagesList = () => {
  // const { id } = useParams();
  return (
    <List title="Coll Band → list of all images"  resource="images" >
           <Datagrid rowClick="edit">
               <TextField source="id" />
               <ModalImage source="image" />
               <ModalImage source="originalImage" />
               <ChipField source="orientation" />
               <TextField source="bluer" />
               <BooleanField source="coverImage" />
               <EditImagesButton />
               <DeleteButton />
           </Datagrid>
 </List>
  )
};

export {EventBandImagesList};




const EditImagesButton = () => {
    const images = useRecordContext();
    return (
        <Button
            component={Link}
            to={`/${rcs.Band.eventBand.resource}/${images?.albumId}/images/${images?.imageId}`}
            // startIcon={<EditIcon />}
        >
        </Button>
    );
};