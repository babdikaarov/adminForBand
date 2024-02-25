import { Identifier, RaRecord, UseRecordContextParams } from "react-admin";
import { useRecordContext } from "react-admin";
import { Link } from "@mui/material";

type ClickVideoProps = {
    text?: string;
} & UseRecordContextParams<RaRecord<Identifier>>;
export const ClickVideo: React.FC<ClickVideoProps> = ({ text = "Посмотреть видео" }, props) => {
    const record = useRecordContext(props);

    return record ? (
        <Link
            href={record.video}
            target="_blank"
            variant="body2"
        >
            {text}
        </Link>
    ) : null;
};
