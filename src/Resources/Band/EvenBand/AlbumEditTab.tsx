
import * as React from 'react';
import {
    DateInput,
    NumberInput,
    ReferenceInput,
    required,
    SelectInput,
    TextField,
    TextInput,
} from 'react-admin';
import { InputAdornment, Grid } from '@mui/material';
import { ModalImage } from '../../../shared/ModalImage';
/* 
      <List title="Coll Band → Альбомы" hasCreate={true} >
         <Edit title="Coll Band → Альбомы → изменить Альбом" redirect="list">
//          <SimpleForm toolbar={<CustomSaveToolBar />}>
//          <TextInput source="id" disabled/>
//          <TextInput source="name" />
//          <DateInput source="date" />
//          </SimpleForm>
//       </Edit>
      </List>
   );
*/
export const AlbumEditTab = () => (
    <Grid container >
        <Grid item xs={12} sm={8}>
        <TextInput source="id" fullWidth disabled/>
        </Grid>
        <Grid item xs={12} sm={8}>
        <TextInput source="name" />
        </Grid>
        <Grid item xs={12} sm={8}>
        <DateInput source="date" />
        </Grid>
        
        
    </Grid>
);

// const req = [required()];