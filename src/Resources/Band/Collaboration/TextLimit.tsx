import { Identifier, RaRecord, UseRecordContextParams } from "react-admin";
import { useRecordContext } from "react-admin";
import { useController } from "react-hook-form";

interface TextLimitProps extends UseRecordContextParams<RaRecord<Identifier>> {
    stylesClass: string;
}
export const TextLimit = (props: TextLimitProps) => {
    const record = useRecordContext(props);
    const context = props?.source as unknown as UseRecordContextParams<RaRecord<Identifier>>;
    const record2 = useRecordContext(context);
    const { field } = useController({ name: `${props?.source}`, defaultValue: record2[props?.source] ?? "" });

    return record ? (
        <>
            <h3>Так будет выглядеть отзыв на сайте:</h3>
            <p className={props.stylesClass}>{field.value}</p>
        </>
    ) : null;
};