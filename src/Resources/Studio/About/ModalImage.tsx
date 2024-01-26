import { Identifier, RaRecord, UseRecordContextParams } from "react-admin";
import { useModalCotroller } from "../../../modules/useModalCotroller";
import styles from "./about.module.css";
import { useRecordContext } from "react-admin";

export const ModalImage = (props: UseRecordContextParams<RaRecord<Identifier>> | undefined) => {
   const { dialogRef, handleClose, openModal } = useModalCotroller();
   const record = useRecordContext(props);
   // console.log(record);
   return record ? (
      <>
         <div onClick={() => openModal(`aboutStudio${record.id}`)} className="MuiBox-root css-cb34tx-RaImageField-root">
            <img src={record.image} alt="" className="RaImageField-image" />
         </div>
         <dialog
            id={`aboutStudio${record.id}`}
            className={styles.modal}
            onClick={() => handleClose(`aboutStudio${record.id}`)}
            ref={dialogRef}
         >
            <span>
               <img src={record.image} alt="" />
            </span>
         </dialog>
      </>
   ) : null;
};
