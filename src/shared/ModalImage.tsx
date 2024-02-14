import { Identifier, RaRecord, UseRecordContextParams } from "react-admin";
import { useModalCotroller } from "../modules/useModalCotroller";
import styles from "./modalImage.module.css";
import { useRecordContext } from "react-admin";

export const ModalImage = (props: UseRecordContextParams<RaRecord<Identifier>> | undefined) => {
   const { dialogRef, handleClose, openModal } = useModalCotroller();
   const record = useRecordContext(props);
   // console.log(record);
   return record ? (
      <>
         <div onClick={() => openModal(`aboutStudio${record.id}`)} className={styles.div}>
            <img src={record.image} alt="" />
         </div>
         <dialog
            id={`aboutStudio${record.id}`}
            className={styles.modal}
            onClick={() => handleClose(`aboutStudio${record.id}`)}
            ref={dialogRef}
         >
               <img src={record.image} alt="" />
         </dialog>
      </>
   ) : null;
};
