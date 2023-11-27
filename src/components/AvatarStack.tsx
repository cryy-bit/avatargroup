import React, { createElement, useState, useEffect, Fragment, ReactElement } from "react";
import { AvatarGroupContainerProps } from "typings/AvatarGroupProps";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import stringAvatar from "src/utils/stringAvatar";
import { data } from "typings/AvatarDataProps";
import PopOver from "./PopOver";

const AvatarStack = (props: AvatarGroupContainerProps): ReactElement => {
    const { datasource, imgSrc, UserName, maxToShow, showPopOver } = props;
    const [isListVisible, setListVisible] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
    const [avatars, setAvatars] = useState<data[]>([]);

    const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))({
        [`& .${tooltipClasses.tooltip}`]: {
            maxWidth: 500,
            fontSize: "1.2rem"
        }
    });

    useEffect(() => {
        if (datasource?.status === "available" && datasource.items) {
            const data: data[] = datasource.items.map(item => ({
                key: item.id,
                name: UserName?.get(item).displayValue,
                src: imgSrc ? imgSrc.get(item).value : undefined
            }));

            setAvatars(data);
        }
    }, [datasource?.status, UserName, datasource?.items, imgSrc]);

    const handleLastAvatarClicked = (event: React.MouseEvent<HTMLDivElement>): void => {
        setListVisible(prev => !prev);
        setAnchorEl(event.currentTarget);
    };

    return (
        <Fragment>
            <AvatarGroup max={maxToShow + 1}>
                {avatars?.slice(0, maxToShow).map(user => {
                    return (
                        <CustomWidthTooltip title={user.name} key={user.key} placement="top">
                            {user.src ? (
                                <Avatar className="avatar" alt={`${user.name}`} src={`${user.src}`} />
                            ) : (
                                <Avatar {...stringAvatar(user.name!)} alt={`${user.name}`} />
                            )}
                        </CustomWidthTooltip>
                    );
                })}
                {avatars && avatars?.length > maxToShow && (
                    <Avatar id="avatar-last-elem" onClick={handleLastAvatarClicked} className="avatar">
                        +{avatars.length - maxToShow}
                    </Avatar>
                )}
            </AvatarGroup>

            {isListVisible && showPopOver && (
                <PopOver
                    isListVisible={isListVisible}
                    anchorEl={anchorEl}
                    setListVisible={setListVisible}
                    data={avatars}
                    maxToShow={maxToShow}
                    stringAvatar={stringAvatar}
                />
            )}
        </Fragment>
    );
};

export default AvatarStack;
