import { List, Datagrid, TextField, EditButton, DeleteButton, ChipField } from "react-admin";
import { ModalImage } from "../../../shared/ModalImage";


export const TestimonaialsList = () => {
   /*
    {
    "id": 0,
    "image": "string",
    "bluer": "string",
    "name": "string",
    "reviews": "string",
    "orientation": "PORTRAIT"
  }
]
  }
   */
   return (
      <List title="Cool Studio → Отзывы учеников" hasCreate={true}>
         {/* <CreateButton /> */}
         <Datagrid>
            <TextField source="id" />
            {/* <ModalImage source="image"  /> */}
            <TextField source="image"  />
            <TextField source="name"  />
            <ModalImage source="bluer"  />
            {/* <TextField source="bluer"  /> */}
            <TextField source="reviews"  />
            <ChipField source="orientation"  />
            <EditButton />
            <DeleteButton />
         </Datagrid>
      </List>
   );
};
