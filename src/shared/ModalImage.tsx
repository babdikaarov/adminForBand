import { EditButton, Identifier, RaRecord, UseRecordContextParams } from "react-admin";
import { useModalCotroller } from "../modules/useModalCotroller";
import styles from "./modalImage.module.css";
import { useRecordContext } from "react-admin";

export const ModalImage = (props: UseRecordContextParams<RaRecord<Identifier>> | undefined) => {
    const { dialogRef, handleClose, openModal } = useModalCotroller();
    const record = useRecordContext(props);
    // console.log(record);
    const id = `${record.id}${record[props?.source]}`;
    // console.log(record[props?.source])
    return record ? (
        <span>
            <div
                onClick={() => openModal(id)}
                title="click to view Image"
                className={styles.div}
            >
                {record[props?.source] ? (
                    <img
                        src={record[props?.source]}
                        alt=""
                    />
                ) : (
                    <EditButton label="Добавить Фото" />
                )}
            </div>
            <dialog
                id={id}
                className={styles.modal}
                onClick={() => handleClose(id)}
                ref={dialogRef}
            >
                <img
                    src={record[props?.source]}
                    alt=""
                />
            </dialog>
        </span>
    ) : null;
};
