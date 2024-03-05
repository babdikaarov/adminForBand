import { MouseEventHandler, ReactElement, useCallback } from "react";
import { UseMutationOptions } from "react-query";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { Button as MuiButton, ButtonProps, CircularProgress } from "@mui/material";
import ContentSave from "@mui/icons-material/Save";
import { useFormContext, useFormState } from "react-hook-form";
import {
    CreateParams,
    RaRecord,
    TransformData,
    UpdateParams,
    setSubmissionErrors,
    useNotify,
    useRecordContext,
} from "ra-core";
import { useNavigate } from "react-router-dom";
import { Toolbar, useUpdate, Button } from "react-admin";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomSaveEdit = <RecordType extends RaRecord = any>(
    {
        goBack = "../",
        noGoBack = false,
        resource,
        noRedirect = false,
        label = "Сохранить изменения",
        label2 = null,
    }: {
        goBack?: string;
        resource: string;
        noRedirect?: boolean;
        redirect2?: boolean;
        noGoBack?: boolean;
        label?: string;
        label2?: string | null;
    },
    props: SaveButtonProps<RecordType>,
) => {
    const {
        color = "primary",
        icon = defaultIcon,
        onClick,
        disabled: disabledProp,
        type = "button",
        variant = "contained",
        alwaysEnable = false,
        ...rest
    } = props;
    const form = useFormContext();
    const notify = useNotify();
    const navigate = useNavigate();
    const { dirtyFields, isValidating, isSubmitting } = useFormState();
    const record = useRecordContext();
    const [update] = useUpdate();
    const isDirty = Object.keys(dirtyFields).length > 0;
    const disabled = valueOrDefault(
        alwaysEnable === false || alwaysEnable === undefined ? undefined : !alwaysEnable,
        disabledProp || !isDirty || isValidating || isSubmitting,
    );

    const { getValues } = useFormContext();
    const data = getValues();

    const { id } = record;

    const handleSubmit = useCallback(async () => {
        update(
            resource,
            { id, data },
            {
                onSuccess: () => {
                    notify("Успешно сохранено");
                    if (!noRedirect) {
                        navigate(-1);
                    }
                },
                onError: () => {
                    setSubmissionErrors(data, form.setError);
                    notify("Что то пошло не так проверьте обязательные поля");
                },
            },
        );
    }, [update, resource, id, data, notify, noRedirect, navigate, form.setError]);

    const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
        async (event) => {
            if (onClick) {
                onClick(event);
            }
            if (event.defaultPrevented) {
                return;
            }
            if (type === "button") {
                // this button doesn't submit the form, so it doesn't trigger useIsFormInvalid in <FormContent>
                // therefore we need to check for errors manually
                event.stopPropagation();
                await form.handleSubmit(handleSubmit, ()=>console.log("validating form"))();
            }
        },
        [onClick, type, form, handleSubmit],
    );
    const handleSubmit2 = useCallback(async () => {
        update(
            resource,
            { id, data },
            {
                onSuccess: () => {
                    notify("Успешно сохранено");
                },
                onError: () => {
                    setSubmissionErrors(data, form.setError);
                    notify("Что то пошло не так проверьте обязательные поля");
                },
            },
        );
    }, [update, resource, id, data, notify, noRedirect, navigate, form.setError]);

    const handleClick2: MouseEventHandler<HTMLButtonElement> = useCallback(
        async (event) => {
            if (onClick) {
                onClick(event);
            }
            if (event.defaultPrevented) {
                return;
            }
            if (type === "button") {
                // this button doesn't submit the form, so it doesn't trigger useIsFormInvalid in <FormContent>
                // therefore we need to check for errors manually
                event.stopPropagation();
                await form.handleSubmit(handleSubmit2, ({ name }) => console.log(name?.message))();
            }
        },
        [onClick, type, form, handleSubmit2],
    );

    const displayedLabel = label;

    return (
        <Toolbar
            sx={{
                position: "sticky",
                bottom: "0px",
                justifyContent: "space-between",
            }}
        >
            <StyledButton
                variant={variant}
                type={type}
                color={color}
                aria-label={displayedLabel}
                disabled={disabled}
                onClick={handleClick}
                {...rest}
            >
                {isSubmitting ? (
                    <CircularProgress
                        sx={circularProgressStyle}
                        size={14}
                        thickness={3}
                        color="inherit"
                    />
                ) : (
                    icon
                )}
                {displayedLabel}
            </StyledButton>

            {label2 ? (
                <StyledButton
                    variant={variant}
                    type={type}
                    color={color}
                    aria-label={label2}
                    disabled={disabled}
                    onClick={handleClick2}
                    {...rest}
                >
                    {isSubmitting ? (
                        <CircularProgress
                            sx={circularProgressStyle}
                            size={14}
                            thickness={3}
                            color="inherit"
                        />
                    ) : (
                        icon
                    )}
                    {label2}
                </StyledButton>
            ) : null}
            {!noGoBack ? (
                <Button
                    label="Назад"
                    size="large"
                    onClick={() => navigate(goBack)}
                />
            ) : null}
        </Toolbar>
    );
};

const circularProgressStyle = {
    "&.MuiCircularProgress-root": {
        marginRight: "10px",
        marginLeft: "2px",
    },
};

const defaultIcon = <ContentSave />;

interface Props<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    RecordType extends RaRecord = any,
    MutationOptionsError = unknown,
> {
    className?: string;
    disabled?: boolean;
    icon?: ReactElement;
    invalid?: boolean;
    label?: string;
    mutationOptions?: UseMutationOptions<
        RecordType,
        MutationOptionsError,
        CreateParams<RecordType> | UpdateParams<RecordType>
    >;
    transform?: TransformData;
    variant?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SaveButtonProps<RecordType extends RaRecord = any> = Props<RecordType> &
    ButtonProps & {
        alwaysEnable?: boolean;
    };

CustomSaveEdit.propTypes = {
    className: PropTypes.string,
    invalid: PropTypes.bool,
    label: PropTypes.string,
    variant: PropTypes.oneOf(["text", "outlined", "contained"]),
    icon: PropTypes.element,
    alwaysEnable: PropTypes.bool,
};

const PREFIX = "RaSaveButton";

const StyledButton = styled(MuiButton, {
    name: PREFIX,
    overridesResolver: (_props, styles) => styles.root,
})(({ theme }) => ({
    position: "relative",
    [`& .MuiSvgIcon-root, & .MuiIcon-root, & .MuiCircularProgress-root`]: {
        marginRight: theme.spacing(1),
    },
    [`& .MuiSvgIcon-root, & .MuiIcon-root`]: {
        fontSize: 18,
    },
}));

const valueOrDefault = (value: boolean | undefined, defaultValue: boolean) =>
    typeof value === "undefined" ? defaultValue : value;

export default CustomSaveEdit;
