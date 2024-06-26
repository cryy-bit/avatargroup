import { createElement, ReactElement } from "react";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { data } from "typings/AvatarDataProps";

interface PopOverProps {
    isListVisible: boolean;
    anchorEl: HTMLDivElement | null; // anchorEl can be null when the Popover is not open
    setListVisible: (visible: boolean) => void;
    data: data[];
    maxToShow: number;
    stringAvatar: (name: string, object?: { width: string; height: string }) => object;
    avatarHeight: number;
    avatarWidth: number;
}

const PopOver = ({
    isListVisible,
    anchorEl,
    setListVisible,
    data,
    maxToShow,
    stringAvatar,
    avatarHeight,
    avatarWidth
}: PopOverProps): ReactElement => {
    const customAvatarSize = {
        height: `${avatarHeight}px`,
        width: `${avatarWidth}px`
    };

    return (
        <Popover
            id="avatar-last-elem"
            open={isListVisible}
            onClose={() => setListVisible(false)}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
            }}
        >
            {data?.slice(maxToShow).map(user => (
                <Typography sx={{ p: 2 }} key={user.key}>
                    <div className="flex-container">
                        {user.src ? (
                            <Avatar sx={customAvatarSize} alt={`${user.name}`} src={`${user.src}`} />
                        ) : (
                            <Avatar alt={`${user.name}`} {...stringAvatar(user.name!, customAvatarSize)} />
                        )}

                        <div className="name-container">{user.name}</div>
                    </div>
                </Typography>
            ))}
        </Popover>
    );
};

export default PopOver;
