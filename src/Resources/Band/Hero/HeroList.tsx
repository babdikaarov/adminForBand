import { List, Datagrid, TextField, EditButton, ChipField } from "react-admin";

export const HeroList = () => {
   return (
      <List title="Coll Band → Банер" hasCreate={false}>
         <Datagrid>
            <TextField source="id" />
            <TextField source="video" title="name" />
            <ChipField source="orientation" />

            {/* <ImageField source="filename" title="image" /> */}
            <EditButton />
         </Datagrid>
      </List>
   );
};
