import { Identifier, RaRecord, UseRecordContextParams } from "react-admin";
import { useRecordContext } from "react-admin";
import { Link } from "@mui/material";

type ClickUrlProps = {
    text?: string;
} & UseRecordContextParams<RaRecord<Identifier>>;
export const ClickUrl: React.FC<ClickUrlProps> = ({ text = "instagram" }, props) => {
    const record = useRecordContext(props);

    return record ? (
        <Link
            href={record.urlInstagram}
            target="_blank"
            variant="body2"
        >
            {text}
        </Link>
    ) : null;
};
