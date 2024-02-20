import { ReactElement } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { styled } from "@mui/material/styles";
import ContentCreate from "@mui/icons-material/Create";
import { Link } from "react-router-dom";
import { RaRecord, useRecordContext } from "ra-core";

import { Button, ButtonProps } from "react-admin";

/**
 * Opens the Edit view for the current record.
 *
 * Reads the record and resource from the context.
 *
 * @example // basic usage
 * import { EditButton } from 'react-admin';
 *
 * const CommentEditButton = () => (
 *     <EditButton label="Edit comment" />
 * );
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CustomEditButton = <RecordType extends RaRecord = any>(props: CustomEditButtonProps<RecordType>) => {
    const { icon = defaultIcon, label = "ra.action.edit", className, to, ...rest } = props;
    // const resource = useResourceContext(props);
    const record = useRecordContext(props);
    // const createPath = useCreatePath();
    if (!record) return null;
    return (
        <StyledButton
            component={Link}
            to={to}
            label={label}
            onClick={stopPropagation}
            className={clsx(EditButtonClasses.root, className)}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            {...(rest as any)}
        >
            {icon}
        </StyledButton>
    );
};

const defaultIcon = <ContentCreate />;

// useful to prevent click bubbling in a datagrid with rowClick
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stopPropagation = (e: { stopPropagation: () => any }) => e.stopPropagation();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Props<RecordType extends RaRecord = any> {
    icon?: ReactElement;
    label?: string;
    record?: RecordType;
    resource?: string;
    scrollToTop?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CustomEditButtonProps<RecordType extends RaRecord = any> = Props<RecordType> & ButtonProps;

CustomEditButton.propTypes = {
    icon: PropTypes.element,
    label: PropTypes.string,
    record: PropTypes.any,
    scrollToTop: PropTypes.bool,
};

const PREFIX = "RaEditButton";

const EditButtonClasses = {
    root: `${PREFIX}-root`,
};

const StyledButton = styled(Button, {
    name: PREFIX,
    overridesResolver: (_props, styles) => styles.root,
})({});
