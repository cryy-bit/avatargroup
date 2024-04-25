/**
 * This file was generated from AvatarGroup.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ListValue, ListAttributeValue, ListExpressionValue } from "mendix";

export type ImgTypeEnum = "img" | "initials";

export interface AvatarGroupContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    datasource: ListValue;
    UserName: ListAttributeValue<string>;
    imgType: ImgTypeEnum;
    imgSrc: ListExpressionValue<string>;
    maxToShow: number;
    avatarWidth: number;
    avatarHeight: number;
    showPopOver: boolean;
    popOverAvatarHeight: number;
    popOverAvatarWidth: number;
}

export interface AvatarGroupPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    datasource: {} | { caption: string } | { type: string } | null;
    UserName: string;
    imgType: ImgTypeEnum;
    imgSrc: string;
    maxToShow: number | null;
    avatarWidth: number | null;
    avatarHeight: number | null;
    showPopOver: boolean;
    popOverAvatarHeight: number | null;
    popOverAvatarWidth: number | null;
}
